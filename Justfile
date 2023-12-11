set positional-arguments
set dotenv-load

mnemonic := env_var_or_default("DEV_MNEMONIC", "test test test test test test test test test test test junk")
sender := env_var_or_default("DEV_SENDER", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")

#
# aliases
#

alias w := watch-test
alias d := dev

#
# public commands
#


# full dev stack
# 1. eth-watch (live-reloading anvil w/ deploy)
# 2. next.js
dev:
  #!/bin/bash -ue
  trap 'kill %1; kill %2' SIGINT
  just eth-watch | sed -e 's/^/\x1b[0;31m[node]\x1b[0m /' &
  just web 2>&1 | sed -e 's/^/\x1b[0;32m[next]\x1b[0m /' &
  wait

watch-test:
  forge test --watch -vvv

test:
  forge test

#
# private commands
#

# 1. build contracts
# 2. run test suite
# 3. re-gen wagmi asynchronously
# 4. wait a bit for anvil to boot, then run deploy script asynchronously
eth:
  #!/bin/bash
  killall -9 anvil
  just build-contracts
  just test
  sleep 0.2 && just eth-deploy &
  just wagmi &
  anvil --host 0.0.0.0

build-contracts:
  forge build

# start next.js dev server
web:
  yarn dev

# generate wagmi
wagmi:
  yarn run wagmi generate

# restart `just eth` when contracts change
eth-watch:
  watchexec \
    --watch contracts \
    --watch test \
    --watch foundry.toml \
   --restart \
   --exts sol,toml \
   just eth

# deploy contracts for development
eth-deploy:
  just forge-script script/DevDeploy.s.sol

# run a forge script from the appropriate sender
forge-script script:
  forge script \
    $1 \
    --fork-url http://localhost:8545 \
    --broadcast \
    --mnemonics "{{ mnemonic }}" \
    --sender "{{ sender }}" \
    --json
