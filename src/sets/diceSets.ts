import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";
import { DiceType} from "../types/DiceType";

import * as fblbasePreviews from "../previews/fblbase";
import * as fblskillPreviews from "../previews/fblskill";
import * as fblgearPreviews from "../previews/fblgear";
import * as fbld8Previews from "../previews/fbld8";
import * as fbld10Previews from "../previews/fbld10";
import * as fbld12Previews from "../previews/fbld12";

import allPreview from "../previews/all.png";

const standardPreviews: Record<DiceStyle, string> = {
  FBLBASE: fblbasePreviews.D6,
  FBLSKILL: fblskillPreviews.D6,
  FBLGEAR: fblgearPreviews.D6,
  FBLD8: fbld8Previews.D8,
  FBLD10: fbld10Previews.D10,
  FBLD12: fbld12Previews.D12,
};

function createStandardSet(style: DiceStyle): DiceSet {
  let id: string;
  let diceType: DiceType; // Change the type to DiceType

  // Set id and diceType based on the style.
  switch (style) {
    case "FBLBASE":
      id = "FBLBASE_STANDARD";
      diceType = "D6"; // Use a valid DiceType value
      break;
    case "FBLSKILL":
      id = "FBLSKILL_STANDARD";
      diceType = "D6";
      break;
    case "FBLGEAR":
      id = "FBLGEAR_STANDARD";
      diceType = "D6";
      break;
    case "FBLD8":
      id = "FBLD8_STANDARD";
      diceType = "D8";
      break;
    case "FBLD10":
      id = "FBLD10_STANDARD";
      diceType = "D10";
      break;
    case "FBLD12":
      id = "FBLD12_STANDARD";
      diceType = "D12";
      break;
    default:
      // Handle any other cases or invalid styles here.
      id = "unknown_STANDARD";
      diceType = "D6"; // You can change this default value as needed.
  }

  return {
    id,
    name: `${style.toLowerCase()} dice`,
    dice: [
      { id: `${id}_${diceType}`, type: diceType, style },
    ],
    previewImage: standardPreviews[style],
  };
}


const standardSets: DiceSet[] = [
  createStandardSet("FBLBASE"),
  createStandardSet("FBLSKILL"),
  createStandardSet("FBLGEAR"),
  createStandardSet("FBLD8"),
  createStandardSet("FBLD10"),
  createStandardSet("FBLD12"),
];

const allSet: DiceSet = {
  id: "all",
  name: "all",
  dice: standardSets.reduce(
    (prev, curr) => [...prev, ...curr.dice],
    [] as Die[]
  ),
  previewImage: allPreview,
};

export const diceSets: DiceSet[] = [...standardSets, allSet];
