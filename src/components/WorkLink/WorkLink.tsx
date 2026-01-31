import { useMemo } from "react";
import { cx } from "@emotion/css";
import GetApp from "@mui/icons-material/GetApp";
import GitHub from "@mui/icons-material/GitHub";
import OpenInBrowser from "@mui/icons-material/OpenInBrowser";
import Tooltip from "@mui/material/Tooltip";
import { ViewportSize } from "../../definitions";
import { ActiveIconStyle, IconStyle, InactiveIconStyle } from "./styled";

type WorkLinkProps = {
  variant: "link" | "github" | "download";
  url: string | null;
  vpSize: ViewportSize;
};

export const WorkLink: React.FC<WorkLinkProps> = ({ variant, url, vpSize }) => {
  const hasUrl = url !== null;

  const Icon = useMemo(() => {
    switch (variant) {
      case "link":
        return OpenInBrowser;
      case "download":
        return GetApp;
      case "github":
        return GitHub;
    }
  }, [variant]);
  const tooltipTitle = useMemo(() => {
    switch (variant) {
      case "link":
        return "サイトを開く";
      case "download":
        return "アプリを手に入れる";
      case "github":
        return "コードを見る";
    }
  }, [variant]);

  return hasUrl ? (
    <Tooltip title={tooltipTitle}>
      <a href={url}>
        <Icon className={cx(ActiveIconStyle, IconStyle(vpSize))} />
      </a>
    </Tooltip>
  ) : (
    <Icon className={cx(InactiveIconStyle, IconStyle(vpSize))} />
  );
};
