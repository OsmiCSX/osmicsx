import rotate from "../../src/rotate";

test('rotate-0 namespace', () => {
  expect(rotate["rotate-0"]).toEqual({ transform: [{ rotate: "0" }] })
})

test('rotate-45 namespace', () => {
  expect(rotate["rotate-45"]).toEqual({ transform: [{ rotate: "45deg" }] })
})

test('rotate-90 namespace', () => {
  expect(rotate["rotate-90"]).toEqual({ transform: [{ rotate: "90deg" }] })
})

test('rotate-180 namespace', () => {
  expect(rotate["rotate-180"]).toEqual({ transform: [{ rotate: "180deg" }] })
})

test('-rotate-45 namespace', () => {
  expect(rotate["-rotate-45"]).toEqual({ transform: [{ rotate: "-45deg" }] })
})

test('-rotate-90 namespace', () => {
  expect(rotate["-rotate-90"]).toEqual({ transform: [{ rotate: "-90deg" }] })
})

test('-rotate-180 namespace', () => {
  expect(rotate["-rotate-180"]).toEqual({ transform: [{ rotate: "-180deg" }] })
})
