import alignItems from "../../src/align-items";

test('items-stretch namespace', () => {
  expect(alignItems['items-stretch']).toEqual({ alignItems: "stretch" })
})

test('items-start namespace', () => {
  expect(alignItems['items-start']).toEqual({ alignItems: "flex-start" })
})

test('items-center namespace', () => {
  expect(alignItems['items-center']).toEqual({ alignItems: "center" })
})

test('items-end namespace', () => {
  expect(alignItems['items-end']).toEqual({ alignItems: "flex-end" })
})

test('items-baseline namespace', () => {
  expect(alignItems['items-baseline']).toEqual({ alignItems: "baseline" })
})
