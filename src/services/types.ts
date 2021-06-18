export interface Position {
  x: number;
  y: number;
  direction: Direction;
}

export enum Direction {
  NORTH, EAST, SOUTH, WEST
}

export enum Command {
  FORWARD, BACKWARDS, ROTATE_LEFT, ROTATE_RIGHT
}