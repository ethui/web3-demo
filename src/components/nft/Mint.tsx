import { useWriteNftMint } from "@/wagmi.generated";
import { Button } from "@mui/material";
import { useAccount } from "wagmi";

export function Mint() {
  const { address } = useAccount();
  const { writeContract, isIdle } = useWriteNftMint();

  if (!address) return null;

  return (
    <Button
      variant="contained"
      disabled={!isIdle}
      onClick={() => {
        writeContract({
          args: [address],
        });
      }}
    >
      {isIdle ? "Mint NFT" : "Minting..."}
    </Button>
  );
}
