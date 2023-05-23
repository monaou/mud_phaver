import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";
import { Direction, Action } from "../layers/phaser/constants";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend }: SetupNetworkResult,
  { }: ClientComponents
) {
  const spawn = (x: number, y: number) => {
    worldSend("spawn", [x, y]);
  };

  const move = (direction: Direction) => {
    worldSend("move", [direction]);
  }

  const attack = (action: Action) => {
    worldSend("attack", [action]);
  }

  return {
    spawn,
    move,
    attack,
  };
}