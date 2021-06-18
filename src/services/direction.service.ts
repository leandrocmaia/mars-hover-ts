import { Command, Direction } from './types';

export interface IDirectionService {
  parseCommands(commands: string): Command[];
  getRight(direction: Direction): Direction
  getLeft(direction: Direction): Direction
}

export class DirectionService implements IDirectionService {

  getRight(direction: Direction): Direction {
    if (direction === 3) 
      return 0
    else 
      return direction + 1
  }

  getLeft(direction: Direction): Direction {
    if (direction === 0) 
      return 3
    else
      return direction - 1
  }

  parseCommands(commands: string): Command[] {
    const split = commands.split('')
    let listOfCommands: Command[] = []
    split.forEach(char => {
      console.log(char)
      switch(char) {
        case 'F':
          listOfCommands.push(Command.FORWARD)
          break
        case 'L':
          listOfCommands.push(Command.ROTATE_LEFT)
          break
        case 'R':
          listOfCommands.push(Command.ROTATE_RIGHT)
          break
        case 'B':
          listOfCommands.push(Command.BACKWARDS)
          break;
      }
    })

    console.log(listOfCommands)

    return listOfCommands

  }


}