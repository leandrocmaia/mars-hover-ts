import { DirectionService } from "../src/services/direction.service"
import { Command } from "../src/services/types"

describe("DirectionService Tests", () => {

  const directionService = new DirectionService()

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