export interface Position {
  x: number;
  y: number;
  direction: Direction;
}

export enum Direction {
  NORTH = "N", EAST = "E", SOUTH = "S", WEST = "W"
}

export enum Command {
  FORWARD = "F", BACKWARDS = "B", ROTATE_LEFT = "L", ROTATE_RIGHT = "R"
}
