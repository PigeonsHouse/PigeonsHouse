import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import GetApp from "@mui/icons-material/GetApp";
import OpenInBrowser from "@mui/icons-material/OpenInBrowser";
import { Link, Tooltip } from "@mui/material";

export type WorkData = {
  name: string,
  thumbnail: string,
  genre: string,
  description: string,
  url: string | null,
  download_url: string | null,
  source_url: string | null,
  created_at: string
}

type CardProps = {
  data: WorkData,
}

const SmallWorkCard: React.FC<CardProps> = () => {
  return (
    <>ちいさい</>
  )
}
const WideWorkCard: React.FC<CardProps & {isUpMedium: boolean}> = ({
  data,
  isUpMedium,
}) => {
  const iconSize = useMemo(() => {
    const size = isUpMedium ? 40 : 36;
    return {
      width: size,
      height: size,
    }
  }, [isUpMedium]);

  return (
    <Box borderRadius={1} border="1px solid #bbb" sx={{backgroundColor: 'white'}} mb={2} p="8px 16px" display="flex" gap={1}>
      <Box flexShrink={0} height="100%" maxHeight={140} width={140/9*16} maxWidth="30%" sx={{ backgroundColor: "#ccc", aspectRatio: "16/9" }}>
        <Box component="img" src={data.thumbnail} height="100%" width="100%" sx={{objectFit: "contain", verticalAlign: "top"}} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h5" fontWeight={800} fontFamily='"M PLUS Rounded 1c"'>{data.name}</Typography>
        <Box mb={1}>{data.description}</Box>
        <Box fontSize={14}><b>GENRE</b>: {data.genre}</Box>
        <Box fontSize={14}><b>制作時期</b>: {data.created_at}</Box>
        <Box display="flex" gap={2} justifyContent="flex-end">
          <Tooltip title={data.url && "サイトを開く"}>
            <Link href={data.url || undefined}>
              <OpenInBrowser sx={{...iconSize, color: (data.url ? "black" : "#ccc")}} />
            </Link>
          </Tooltip>
          <Tooltip title={data.source_url && "コードを見る"}>
            <Link href={data.source_url || undefined}>
              <GitHub sx={{...iconSize, color: (data.source_url ? "black" : "#ccc")}} />
            </Link>
          </Tooltip>
          <Tooltip title={data.download_url && "アプリを手に入れる"}>
            <Link href={data.download_url || undefined}>
              <GetApp sx={{...iconSize, color: (data.download_url ? "black" : "#ccc")}} />
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

type WorkProps = CardProps & {
  isUpSmall: boolean,
  isUpMedium: boolean,
}

const WorkCard: React.FC<WorkProps> = ({
  data,
  isUpSmall,
  isUpMedium,
}) => {
  return (
    <>
      {isUpSmall ? (
        <WideWorkCard data={data} isUpMedium={isUpMedium} />
      ) : (
        <SmallWorkCard data={data} />
      )}
    </>
  );
}

export default WorkCard;
