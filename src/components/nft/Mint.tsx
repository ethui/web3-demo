import { usePrepareNftMint } from "@/wagmi.generated";
import { Button } from "@mui/material";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";

export function Mint() {
  const { address } = useAccount();
  const { config } = usePrepareNftMint({
    args: address && [address],
    enabled: !!address,
  });

  const write = useContractWrite(config);

  const wait = useWaitForTransaction({
    hash: write.data?.hash,
  });
  console.log(config, write, wait);

  const isLoading = wait.isLoading || write.isLoading;

  return (
    <Button
      variant="contained"
      disabled={isLoading}
      onClick={() => write.write?.()}
    >
      {isLoading ? "Minting..." : "Mint NFT"}
    </Button>
  );
}
