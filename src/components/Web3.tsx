"use client";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { foundry } from "@wagmi/core/chains";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [foundry],
  [publicProvider()],
  { pollingInterval: 500 }
);

const connectors = connectorsForWallets([
  { groupName: "Recommended", wallets: [injectedWallet({ chains })] },
]);

const wagmi = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function Web3({ children }: Props) {
  return (
    <WagmiConfig config={wagmi}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}

interface Props {
  children: React.ReactNode;
}
