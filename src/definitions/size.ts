export const SMALLER_BREAK_POINT = 600;
export const LARGER_BREAK_POINT = 900;
export const MAX_WIDTH = 1200;

export const ViewportSize = {
  Small: "small",
  Middle: "middle",
  Large: "large",
} as const;
export type ViewportSize = (typeof ViewportSize)[keyof typeof ViewportSize];

export const isSmall = (vpSize: ViewportSize) => vpSize === ViewportSize.Small;
export const isMiddle = (vpSize: ViewportSize) =>
  vpSize === ViewportSize.Middle;
export const isLarge = (vpSize: ViewportSize) => vpSize === ViewportSize.Large;
