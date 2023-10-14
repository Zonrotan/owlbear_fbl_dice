import { styled } from "@mui/material/styles";

import { DiceStyle } from "../types/DiceStyle";
import { DiceType } from "../types/DiceType";

import * as fblbasePreviews from "./fblbase";
import * as fblskillPreviews from "./fblskill";
import * as fblgearPreviews from "./fblgear";
import * as fbld8Previews from "./fbld8";
import * as fbld10Previews from "./fbld10";
import * as fbld12Previews from "./fbld12";


const previews: Record<DiceStyle, Record<DiceType, string>> = {
  FBLBASE: fblbasePreviews,
  FBLSKILL: fblskillPreviews,
  FBLGEAR: fblgearPreviews,
  FBLD8: fbld8Previews,
  FBLD10: fbld10Previews,
  FBLD12: fbld12Previews,
};

interface PreviewImageProps {
  size?: "small" | "medium" | "large";
}

const PreviewImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "size",
})<PreviewImageProps>(({ size }) => ({
  width: size === "small" ? "28px" : size === "medium" ? "34px" : "38px",
  height: size === "small" ? "28px" : size === "medium" ? "34px" : "38px",
}));

type DiePreviewProps = {
  diceType: DiceType;
  diceStyle: DiceStyle;
  size?: "small" | "medium" | "large";
};

export function DicePreview({ diceType, diceStyle, size }: DiePreviewProps) {
  return (
    <PreviewImage
      src={previews[diceStyle][diceType]}
      alt={`${diceStyle} ${diceType} preview`}
      size={size}
    />
  );
}
