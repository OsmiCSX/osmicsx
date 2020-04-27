import alignSelf from "../../src/align-self";

test('self-start namespace', () => {
  expect(alignSelf['self-start']).toEqual({ alignSelf: "flex-start" })
})

test('self-center namespace', () => {
  expect(alignSelf['self-center']).toEqual({ alignSelf: "center" })
})

test('self-end namespace', () => {
  expect(alignSelf['self-end']).toEqual({ alignSelf: "flex-end" })
})

test('self-auto namespace', () => {
  expect(alignSelf['self-auto']).toEqual({ alignSelf: "auto" })
})

test('self-stretch namespace', () => {
  expect(alignSelf['self-stretch']).toEqual({ alignSelf: "stretch" })
})

test('self-baseline namespace', () => {
  expect(alignSelf['self-baseline']).toEqual({ alignSelf: "baseline" })
})
