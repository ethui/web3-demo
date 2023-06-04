import { useTokenBalanceOf, useTokenTransferEvent } from "@/wagmi.generated";
import { Typography } from "@mui/material";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

export default function Balancee() {
  const { address } = useAccount();
  const { data: balance, refetch } = useTokenBalanceOf({
    args: address && [address ?? "0x0"],
    enabled: !!address,
  });

  useTokenTransferEvent({
    listener: () => {
      refetch().catch(console.error);
    },
  });

  if (!balance) return null;

  return <Typography>Balances: {formatEther(balance)}</Typography>;
}
