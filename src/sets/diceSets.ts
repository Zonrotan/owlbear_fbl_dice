import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";

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
  const id = `${style}_STANDARD`;
  return {
    id,
    name: `${style.toLowerCase()} dice`,
    dice: [
      { id: `${id}_D6`, type: "D6", style },
    ],
    previewImage: standardPreviews[style],
  };
}

const standardSets = [

  createStandardSet ("FBLBASE"),
  createStandardSet ("FBLSKILL"),
  createStandardSet ("FBLGEAR"),
  createStandardSet ("FBLD8"),
  createStandardSet ("FBLD10"),
  createStandardSet ("FBLD12"),
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
