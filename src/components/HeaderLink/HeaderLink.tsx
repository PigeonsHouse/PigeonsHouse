import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import X from "@mui/icons-material/X";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "./styled";

const links = {
  niconico: {
    tooltip: "ニコニコ動画",
    url: "https://www.nicovideo.jp/user/125551772",
    icon: <img src="/links/nc296562.png" />,
  },
  twitter: {
    tooltip: "X(Twitter)",
    url: "https://x.com/PigeonsHouse",
    icon: <X />,
  },
  qiita: {
    tooltip: "Qiita",
    url: "https://qiita.com/PigeonsHouse",
    icon: <img src="/links/qiita.png" />,
  },
  github: {
    tooltip: "GitHub",
    url: "https://github.com/PigeonsHouse",
    icon: <GitHub />,
  },
  voskey: {
    tooltip: "ぼすきー(Misskey)",
    url: "https://voskey.icalo.net/@pikora_niconico",
    icon: <img src="https://voskey-s.icalo.net/res/voskey_icon.webp" />,
  },
  soundcloud: {
    tooltip: "SoundCloud",
    url: "https://soundcloud.com/bmitn5hfdagh",
    icon: <img src="/links/soundcloud.svg" />,
  },
} as const;

type HeaderLinkProps = {
  variant: keyof typeof links;
};

export const HeaderLink: React.FC<HeaderLinkProps> = ({ variant }) => {
  return (
    <Tooltip title={links[variant].tooltip}>
      <Link href={links[variant].url} target="_blank" rel="noopener">
        {links[variant].icon}
      </Link>
    </Tooltip>
  );
};
