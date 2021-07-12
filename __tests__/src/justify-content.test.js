import apply from '../../dist/core/apply';

test('justify-end namespace', () => {
  expect(apply("justify-end")).toEqual({ justifyContent: "flex-end" })
})

test('justify-center namespace', () => {
  expect(apply("justify-center")).toEqual({ justifyContent: "center" })
})

test('justify-between namespace', () => {
  expect(apply("justify-between")).toEqual({ justifyContent: "space-between" })
})

test('justify-start namespace', () => {
  expect(apply("justify-start")).toEqual({ justifyContent: "flex-start" })
})

test('justify-evenly namespace', () => {
  expect(apply("justify-evenly")).toEqual({ justifyContent: "space-evenly" })
})

test('justify-around namespace', () => {
  expect(apply("justify-around")).toEqual({ justifyContent: "space-around" })
})

