import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import X from "@mui/icons-material/X";
import { Tooltip } from "@mui/material";

type HeaderProps = {
  isUpSmall: boolean;
  isUpMedium: boolean;
};

const Header: React.FC<HeaderProps> = ({ isUpMedium, isUpSmall }) => {
  return (
    <Box
      minHeight={60}
      color="white"
      sx={{ backgroundColor: "#282828" }}
      position="sticky"
      top={0}
    >
      <Box
        maxWidth="lg"
        m="auto"
        display="flex"
        alignItems="center"
        height="60px"
        px={2}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems={isUpSmall ? "flex-end" : "center"}
          gap={1}
        >
          <Box
            component="img"
            src="/avatar.png"
            height="40px"
            borderRadius={2}
          />
          {isUpSmall && (
            <Typography
              fontFamily='"M PLUS Rounded 1c"'
              variant="h4"
              fontSize="2rem"
              fontWeight={800}
            >
              {isUpMedium ? "PigeonsHouse's Portfolio" : "PigeonsHouse"}
            </Typography>
          )}
          {isUpMedium && (
            <Typography fontFamily='"M PLUS Rounded 1c"'>
              鳩屋敷のお屋敷
            </Typography>
          )}
        </Box>
        <Box display="flex" alignItems="center" height="50%" gap={1.5}>
          <Tooltip title="ニコニコ動画">
            <Link
              href="https://www.nicovideo.jp/user/125551772"
              height="95%"
              target="_blank"
              rel="noopener"
            >
              <Box component="img" src="/nc296562.png" height="100%" />
            </Link>
          </Tooltip>
          <Tooltip title="X(Twitter)">
            <Link
              href="https://x.com/PigeonsHouse"
              height="100%"
              sx={{ color: "white" }}
              target="_blank"
              rel="noopener"
            >
              <X sx={{ fontSize: 30 }} />
            </Link>
          </Tooltip>
          <Tooltip title="Qiita">
            <Link
              href="https://qiita.com/PigeonsHouse"
              height="95%"
              target="_blank"
              rel="noopener"
            >
              <Box component="img" src="/qiita-white-icon.png" height="100%" />
            </Link>
          </Tooltip>
          <Tooltip title="GitHub">
            <Link
              href="https://github.com/PigeonsHouse"
              height="100%"
              sx={{ color: "white" }}
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </Link>
          </Tooltip>
          <Tooltip title="ぼすきー(ActivityPub)">
            <Link
              href="https://voskey.icalo.net/@pikora_niconico"
              height="100%"
              target="_blank"
              rel="noopener"
            >
              <Box
                component="img"
                src="https://voskey-s.icalo.net/res/voskey_icon.webp"
                height="100%"
              />
            </Link>
          </Tooltip>
          <Tooltip title="SoundCloud">
            <Link
              href="https://soundcloud.com/bmitn5hfdagh"
              height="100%"
              target="_blank"
              rel="noopener"
            >
              <Box
                component="img"
                src="/soundcloud.svg"
                height="100%"
                style={{ color: "white" }}
              />
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};


export default Header;
