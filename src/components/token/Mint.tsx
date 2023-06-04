import { usePrepareTokenMint } from "@/wagmi.generated";
import { Button } from "@mui/material";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";

export function Mint() {
  const { address } = useAccount();
  const { config } = usePrepareTokenMint({
    args: address && [address ?? "0x0", BigInt(100)],
    enabled: !!address,
  });

  const write = useContractWrite(config);

  const wait = useWaitForTransaction({
    hash: write.data?.hash,
  });

  const isLoading = wait.isLoading || write.isLoading;

  return (
    <Button
      variant="contained"
      disabled={isLoading}
      onClick={() => write.write?.()}
    >
      {isLoading ? "Minting..." : "Mint $TEST"}
    </Button>
  );
}
