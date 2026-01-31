import { useCallback, useEffect, useState } from "react";
import {
  LARGER_BREAK_POINT,
  SMALLER_BREAK_POINT,
  ViewportSize,
} from "../definitions";

export const useVpSize = () => {
  const [vpSize, setVpSize] = useState<ViewportSize>(ViewportSize.Large);

  const calcVpSize = useCallback(() => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < SMALLER_BREAK_POINT) {
      setVpSize(ViewportSize.Small);
    } else if (viewportWidth < LARGER_BREAK_POINT) {
      setVpSize(ViewportSize.Middle);
    } else {
      setVpSize(ViewportSize.Large);
    }
  }, [setVpSize]);

  useEffect(() => {
    calcVpSize();
    window.addEventListener("resize", calcVpSize);
    return () => window.removeEventListener("resize", calcVpSize);
  }, [calcVpSize]);

  return { vpSize };
};
