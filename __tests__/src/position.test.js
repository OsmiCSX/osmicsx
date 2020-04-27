import position from "../../src/position";

test('absolute namespace', () => {
  expect(position["absolute"]).toEqual({ position: "absolute" })
})

test('relative namespace', () => {
  expect(position["relative"]).toEqual({ position: "relative" })
})
