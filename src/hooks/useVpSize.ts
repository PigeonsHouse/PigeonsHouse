import { useMemo } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { ViewportSize } from "../types";

export const useVpSize = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));
  const isMiddle = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const vpSize = useMemo(() => {
    switch (true) {
      case isLarge:
        return ViewportSize.Large;
      case isMiddle:
        return ViewportSize.Middle;
      case isSmall:
        return ViewportSize.Small;
      default:
        throw Error();
    }
  }, [isLarge, isMiddle, isSmall]);

  return { vpSize };
};
