import alignContent from "../../src/align-content";

test('content-start namespace', () => {
  expect(alignContent['content-start']).toEqual({ alignContent: "flex-start" })
})

test('content-center namespace', () => {
  expect(alignContent['content-center']).toEqual({ alignContent: "center" })
})

test('content-end namespace', () => {
  expect(alignContent['content-end']).toEqual({ alignContent: "flex-end" })
})

test('content-stretch namespace', () => {
  expect(alignContent['content-stretch']).toEqual({ alignContent: "stretch" })
})

test('content-between namespace', () => {
  expect(alignContent['content-between']).toEqual({ alignContent: "space-between" })
})

test('content-around namespace', () => {
  expect(alignContent['content-around']).toEqual({ alignContent: "space-around" })
})
