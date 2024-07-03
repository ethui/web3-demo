import { useWriteTokenMint } from "@/wagmi.generated";
import { Button } from "@mui/material";
import { useAccount } from "wagmi";

export function Mint() {
  const { address } = useAccount();
  const { writeContract, isIdle } = useWriteTokenMint();

  if (!address) return null;

  return (
    <Button
      variant="contained"
      disabled={!isIdle}
      onClick={() => {
        writeContract({
          functionName: "mint", // https://github.com/wevm/wagmi/issues/3613
          args: [address, BigInt(1e18)],
        });
      }}
    >
      {isIdle ? "Mint $TEST" : "Minting..."}
    </Button>
  );
}
