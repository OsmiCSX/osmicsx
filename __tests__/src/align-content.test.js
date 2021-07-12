import apply from "../../dist/core/apply.js";


test('content-start namespace', () => {
  expect(apply('content-start')).toEqual({ alignContent: "flex-start" })
})

test('content-center namespace', () => {
  expect(apply('content-center')).toEqual({ alignContent: "center" })
})

test('content-end namespace', () => {
  expect(apply('content-end')).toEqual({ alignContent: "flex-end" })
})

test('content-stretch namespace', () => {
  expect(apply('content-stretch')).toEqual({ alignContent: "stretch" })
})

test('content-between namespace', () => {
  expect(apply('content-between')).toEqual({ alignContent: "space-between" })
})

test('content-around namespace', () => {
  expect(apply('content-around')).toEqual({ alignContent: "space-around" })
})
