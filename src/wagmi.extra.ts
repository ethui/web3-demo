import { useNetwork, useContractReads } from "wagmi";
import type { UseContractReadConfig } from "wagmi";
import { nftABI, nftAddress } from "./wagmi.generated";

export function useNftTokenUriReads(
  configs: Array<
    Omit<
      UseContractReadConfig<typeof nftABI, "tokenURI">,
      "abi" | "functionName"
    >
  > = [] as any
) {
  const { chain } = useNetwork();

  const reads = configs.map((config) => {
    const chainId = config.chainId ?? chain?.id;
    return {
      abi: nftABI,
      address: nftAddress[chainId as keyof typeof nftAddress],
      functionName: "tokenURI",
      ...config,
    };
  });

  return useContractReads({ contracts: reads });
}
