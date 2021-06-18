import { DirectionService } from "../src/services/direction.service"
import { Command, Direction } from "../src/services/types"

describe("DirectionService Tests", () => {

  const directionService = new DirectionService()

  it("should rotate to left", () => {
    expect(directionService.getLeft(Direction.EAST)).toEqual(Direction.NORTH)
    expect(directionService.getLeft(Direction.NORTH)).toEqual(Direction.WEST)
    expect(directionService.getLeft(Direction.WEST)).toEqual(Direction.SOUTH)
    expect(directionService.getLeft(Direction.SOUTH)).toEqual(Direction.EAST)
  })

  it("should rotate to right", () => {
    expect(directionService.getRight(Direction.EAST)).toEqual(Direction.SOUTH)
    expect(directionService.getRight(Direction.SOUTH)).toEqual(Direction.WEST)
    expect(directionService.getRight(Direction.WEST)).toEqual(Direction.NORTH)
    expect(directionService.getRight(Direction.NORTH)).toEqual(Direction.EAST)
  })

  it("should parse simple command F", () => {
    const result = directionService.parseCommands("F")
    const should = [
      Command.FORWARD
    ]
    expect(result).toEqual(should)
  })
  it("should parse complex command FLFFFRFLB", () => {
    const result = directionService.parseCommands("FLFFFRFLB")
    const should = [
      Command.FORWARD, 
      Command.ROTATE_LEFT, 
      Command.FORWARD, Command.FORWARD, Command.FORWARD,
      Command.ROTATE_RIGHT,
      Command.FORWARD,
      Command.ROTATE_LEFT,
      Command.BACKWARDS
    ]
    expect(result).toEqual(should)
  })
})