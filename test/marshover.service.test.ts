import { DirectionService } from "../src/services/direction.service"
import { MarsHoverService } from "../src/services/marshover.service"
import { Command, Direction } from "../src/services/types"

describe("Newstore Tests", () => {

  const directionService = new DirectionService()
  it("ts-jest should work", () => {
    expect(true).toBe(true)
  })

  it("should land and keep on same position and direction NORTH", () => {
    const landingposition = {y: 0, x: 0, direction: Direction.NORTH}
    const service = new MarsHoverService(landingposition, directionService);
    expect(service.getCurrentPosition()).toEqual(landingposition)
  })

  it("should the hover move forward", () => {
    const landingposition = {y: 0, x: 0, direction: Direction.NORTH}
    const service = new MarsHoverService(landingposition, directionService);
    const result = service.move("F")
    const shouldCurrentPosition = {x: 0, y: 1, direction: Direction.NORTH}
    expect(result).toEqual(shouldCurrentPosition)
  })

  it("should the hover move forward from east", () => {
    const landingposition = {y: 0, x: 0, direction: Direction.EAST}
    const service = new MarsHoverService(landingposition, directionService);
    const result = service.move("F")
    const shouldCurrentPosition = {x: 1, y: 0, direction: Direction.EAST}
    expect(result).toEqual(shouldCurrentPosition)
  })

  it("should the hover move forward from east", () => {
    const landingposition = {y: 0, x: 0, direction: Direction.EAST}
    const service = new MarsHoverService(landingposition, directionService);
    const result = service.move("F")
    const shouldCurrentPosition = {x: 1, y: 0, direction: Direction.EAST}
    expect(result).toEqual(shouldCurrentPosition)
  })

  it("should the hover move FLF", () => {
    const landingposition = {y: 0, x: 0, direction: Direction.NORTH}
    const service = new MarsHoverService(landingposition, directionService);
    const result = service.move("FLF")
    const shouldCurrentPosition = {x: -1 , y: 1, direction: Direction.WEST}
    expect(result).toEqual(shouldCurrentPosition)
  })

  it("should the hover move FLFFFRFLB", () => {
    const landingposition = {y: 0, x: 0, direction: Direction.NORTH}
    const service = new MarsHoverService(landingposition, directionService);
    const result = service.move("FLFFFRFLB")
    const shouldCurrentPosition = { x:  -2, y: 2, direction: Direction.WEST}
    expect(result).toEqual(shouldCurrentPosition)
  })
})