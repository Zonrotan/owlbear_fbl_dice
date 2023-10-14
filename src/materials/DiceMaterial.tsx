import { DiceStyle } from "../types/DiceStyle";
import { FblbaseMaterial } from "./fblbase/FblbaseMaterial";
import { FblgearMaterial } from "./fblgear/FblgearMaterial";
import { FblskillMaterial } from "./fblskill/FblskillMaterial";
import { Fbld8Material } from "./fbld8/Fbld8Material";
import { Fbld10Material } from "./fbld10/Fbld10Material";
import { Fbld12Material } from "./fbld12/Fbld12Material";

export function DiceMaterial({ diceStyle }: { diceStyle: DiceStyle }) {
  switch (diceStyle) {
    case "FBLBASE":
      return <FblbaseMaterial />;
    case "FBLGEAR":
      return <FblgearMaterial />;
    case "FBLSKILL":
      return <FblskillMaterial />;
      case "FBLD8":
        return <Fbld8Material />;
      case "FBLD10":
      return <Fbld10Material />;
      case "FBLD12":
        return <Fbld12Material />;
        
    default:
      throw Error(`Dice style ${diceStyle} error: not implemented`);
  }
}
