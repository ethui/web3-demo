import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary">
        <Link href="/nft" style={{ textDecoration: "none", color: "white" }}>
          NFT
        </Link>
      </Button>

      <Button variant="contained" color="primary">
        <Link href="/token" style={{ textDecoration: "none", color: "white" }}>
          Token
        </Link>
      </Button>
    </Stack>
  );
}
