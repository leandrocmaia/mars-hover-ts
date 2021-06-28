import { Command, Direction, Position } from "./types";

export class Hover  {

  public position: Position

  constructor(position: Position) {
    this.position = position
  }

  forward() {
    switch(this.position.direction) {
      case Direction.EAST:
        this.position.x ++
        break;
      case Direction.WEST:
        this.position.x --
        break;
      case Direction.NORTH:
        this.position.y ++
        break;
      case Direction.SOUTH:
        this.position.y --
        break;
    }
  }

  backwards() {
    switch(this.position.direction) {
      case Direction.EAST:
        this.position.x --
        break;
      case Direction.WEST:
        this.position.x ++
        break;
      case Direction.NORTH:
        this.position.y --
        break;
      case Direction.SOUTH:
        this.position.y ++
        break;
    }

  }

  rotateLeft() {
    switch(this.position.direction) {
      case Direction.NORTH:
        this.position.direction = Direction.WEST;
        break;
      case Direction.EAST:
        this.position.direction = Direction.NORTH;
          break;
      case Direction.SOUTH:
        this.position.direction = Direction.EAST;    
        break;
      case Direction.WEST:
          this.position.direction = Direction.SOUTH;
          break; 
    }
  }

  rotateRight() {
    switch(this.position.direction) {
      case Direction.NORTH:
        this.position.direction = Direction.EAST;
        break;
      case Direction.EAST:
        this.position.direction = Direction.SOUTH;
          break;
      case Direction.SOUTH:
        this.position.direction = Direction.WEST;    
        break;
      case Direction.WEST:
          this.position.direction = Direction.NORTH;
          break; 
    }
  }
  
  move(commands: string): Position {

    commands.split("").forEach(command => {

      switch(command) {
        case Command.FORWARD:
          this.forward()
          break;
        case Command.BACKWARDS:
          this.backwards()
          break;
        case Command.ROTATE_LEFT:
          this.rotateLeft()
          break;
        case Command.ROTATE_RIGHT:
          this.rotateRight()
          break;
      }
  

      console.log(`(${this.position.x}, ${this.position.y}, ${this.position.direction})`)

    })

    return this.position
  
  }
}