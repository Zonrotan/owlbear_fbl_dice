import { DiceType } from "../types/DiceType";
import { D6Collider } from "./D6Collider";

export function DiceCollider({ diceType }: { diceType: DiceType }) {
  switch (diceType) {
    case "D6":
      return <D6Collider />;
    default:
      throw Error(`Dice type ${diceType} error: not implemented`);
  }
}
