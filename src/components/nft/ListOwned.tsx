import { useNftTokenUriReads } from "@/wagmi.extra";
import {
  useNftListTokensByAddress,
  useNftTransferEvent,
} from "@/wagmi.generated";
import { Grid } from "@mui/material";
import { map } from "lodash-es";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export function ListOwned() {
  const { address } = useAccount();

  const { data: nftsList, refetch } = useNftListTokensByAddress({
    args: [address ?? "0x0"],
    enabled: !!address,
  });

  const { data: uris } = useNftTokenUriReads(
    map(nftsList).map((id) => ({
      args: [id],
      enabled: !!nftsList,
    }))
  );

  const [metadatas, setMetadatas] = useState<Metadata[]>([]);

  useEffect(() => {
    if (!uris) return;

    const metadatas = (uris as { result: string }[]).map(({ result }) =>
      decodeMetadata(result)
    );
    setMetadatas(metadatas);
  }, [uris]);

  useNftTransferEvent({
    listener: () => {
      refetch().catch(console.error);
    },
  });

  return (
    <Grid container>
      {metadatas?.map(({ image }) => (
        <Grid item key={image}>
          <img src={image} srcSet={image} width={100} />
        </Grid>
      ))}
    </Grid>
  );
}

export interface Metadata {
  image: string;
}

export function decodeMetadata(encoded: string): Metadata {
  return JSON.parse(
    window.atob(encoded.replace("data:application/json;base64,", ""))
  );
}
