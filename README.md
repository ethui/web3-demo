# Stack3

[foundry]: https://getfoundry.sh/
[iron]: https://github.com/iron-wallet/iron
[next]: https://nextjs.org/
[material-ui]: https://mui.com/
[rainbow-kit]: https://www.rainbowkit.com/
[wagmi]: https://wagmi.sh/
[viem]: https://viem.sh/
[just]: https://github.com/casey/just

An opinionated starter for Web3 projects -- and a testing ground for [Iron Wallet][iron]

## What's in it?

- Out-of-the-box working dApp ([Next.js][next], [Material UI][material-ui], [RainbowKit][rainbow-kit], [wagmi][wagmi], [viem][viem])
- Sample contracts (NFT, ERC20, ...)
- Built-in UI to interact with testing contracts

## Getting started

1. You'll need all of these tools before getting started:

- Node.js
- Foundry
- [`watchexec`](https://github.com/watchexec/watchexec)
- [`just`](https://github.com/casey/just)

2. Clone this repo:

```sh
git clone git@github.com:iron-wallet/web3-demo --recurse-submodules
cd web3-demo
yarn install
```

3. Start the servers:

```sh
just dev
```

## The full stack

This is a breakdown of all the tools you get from this:

- [**Foundry**][foundry]: A smart contract development toolchain.
- [**Next.js**][next] A React-based framework for full-stack applications
- [**wagmi**][wagmi] For auto generated with everything needed for connecting UI with contracts
- [**RainbowKit**][rainbow-kit] The most straightforward to connect a wallet
- [**Material UI**][material-ui]
- [**Just**][just] A simple yet powerfile command runner, used here for easy orchestration

## Contributing

Pull requests, issues, or general feedback is welcome! Reach out to me via [email](mailto:mpalhas@gmail.com), [twitter](https://twitter.com/naps62), [mastodon](https://fedi.subvisual.co/@naps62), or [telegram](https://t.me/naps62)
