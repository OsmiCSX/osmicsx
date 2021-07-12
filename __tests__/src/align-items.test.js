import apply from '../../dist/core/apply'

test('items-stretch namespace', () => {
  expect(apply('items-stretch')).toEqual({ alignItems: "stretch" })
})

test('items-start namespace', () => {
  expect(apply('items-start')).toEqual({ alignItems: "flex-start" })
})

test('items-center namespace', () => {
  expect(apply('items-center')).toEqual({ alignItems: "center" })
})

test('items-end namespace', () => {
  expect(apply('items-end')).toEqual({ alignItems: "flex-end" })
})

test('items-baseline namespace', () => {
  expect(apply('items-baseline')).toEqual({ alignItems: "baseline" })
})
