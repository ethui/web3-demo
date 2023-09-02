"use client";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { foundry, mainnet } from "@wagmi/core/chains";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [foundry, mainnet],
  [publicProvider()],
  { pollingInterval: 500 }
);

const { connectors } = getDefaultWallets({
  appName: "Iron Demo",
  projectId: "iron-demo",
  chains,
});

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
