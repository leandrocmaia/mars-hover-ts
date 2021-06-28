import { Hover as Hover } from "../src/hover"
import { Direction } from "../src/types"

describe("Hover Tests", () => {

  it("ts-jest should work", () => {
    expect(true).toBe(true)
  })

  it("should land and keep on same position and direction NORTH", () => {
    const position = { x: 0, y: 0, direction: Direction.NORTH }
    const service = new Hover(position);
    expect(service.position).toEqual(position)
  })

  it("should the hover move F", () => {
    const position = { x: 0, y: 0, direction: Direction.NORTH }
    const service = new Hover(position);
    const result = service.move("F")
    const should = { x: 0, y: 1, direction: Direction.NORTH}
    expect(result).toEqual(should)
  })

  it("should the hover move F from 0, 0, E", () => {
    const position = { x: 0, y: 0, direction: Direction.EAST }
    const service = new Hover(position);
    const result = service.move("F")
    const should = { x: 1, y: 0, direction: Direction.EAST}
    expect(result).toEqual(should)
  })

  it("should the hover move FLF from 0, 0, N", () => {
    const position = { x: 0, y: 0, direction: Direction.NORTH }
    const service = new Hover(position);
    const result = service.move("FLF")
    const should = { x: -1 , y: 1, direction: Direction.WEST}
    expect(result).toEqual(should)
  })

  it("should the hover move FLFFFRFLB from 0,0, N", () => {
    const landingposition = { x: 0, y: 0, direction: Direction.NORTH }
    const service = new Hover(landingposition);
    const result = service.move("FLFFFRFLB")
    const should = { x: -2, y: 2, direction: Direction.WEST }
    expect(result).toEqual(should)
  })

  it("should the hover move FLFFFRFLB from 0,0, E", () => {
    const landingposition = { x: 4, y: 2, direction: Direction.EAST }
    const service = new Hover(landingposition);
    const result = service.move("FLFFFRFLB")
    const should = { x: 6, y: 4, direction: Direction.NORTH }
    expect(result).toEqual(should)
  })
})