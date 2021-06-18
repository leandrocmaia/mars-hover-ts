import {  IDirectionService } from './direction.service';
import { Command, Direction, Position as Position } from "./types";

export interface IMarsHoverService {
  move(commands: string): Position
}

export class MarsHoverService implements IMarsHoverService {

  private currentPosition: Position

  private directionService: IDirectionService

  constructor(landingPosition: Position, directionService: IDirectionService) {
    this.currentPosition = landingPosition
    this.directionService = directionService
  }

  move(commands: string): Position {

    const parsedCommands: Command[] = this.directionService.parseCommands(commands)
    const currentPosition = this.getCurrentPosition()
    parsedCommands.forEach(command => {


      if (command === Command.FORWARD) {
        if (currentPosition.direction === Direction.EAST) {
          currentPosition.x = currentPosition.x + 1
        } else if (currentPosition.direction === Direction.WEST) {
          currentPosition.x = currentPosition.x - 1
        } else if (currentPosition.direction === Direction.NORTH) {
          currentPosition.y =  currentPosition.y + 1
        } else if (currentPosition.direction === Direction.SOUTH) {
          currentPosition.y =  currentPosition.y - 1
        }
      }

      if (command === Command.BACKWARDS) {
        if (currentPosition.direction === Direction.EAST) {
          currentPosition.x = currentPosition.x - 1
        } else if (currentPosition.direction === Direction.WEST) {
          currentPosition.x = currentPosition.x + 1
        } else if (currentPosition.direction === Direction.NORTH) {
          currentPosition.y = currentPosition.y - 1
        } else if (currentPosition.direction === Direction.SOUTH) {
          currentPosition.y = currentPosition.y + 1
        }
      }

      if (command === Command.ROTATE_LEFT) {
        currentPosition.direction = this.directionService.getLeft(currentPosition.direction)
      }

      if (command === Command.ROTATE_RIGHT) {
        currentPosition.direction = this.directionService.getRight(currentPosition.direction)
      }

      console.log(`Command: ${command} - ${JSON.stringify(currentPosition)}`)

    })

    return currentPosition
  
  }

  getCurrentPosition() {
    return this.currentPosition
  }

}