import apply from '../../dist/core/apply';

test('self-start namespace', () => {
  expect(apply('self-start')).toEqual({ alignSelf: "flex-start" })
})

test('self-center namespace', () => {
  expect(apply('self-center')).toEqual({ alignSelf: "center" })
})

test('self-end namespace', () => {
  expect(apply('self-end')).toEqual({ alignSelf: "flex-end" })
})

test('self-auto namespace', () => {
  expect(apply('self-auto')).toEqual({ alignSelf: "auto" })
})

test('self-stretch namespace', () => {
  expect(apply('self-stretch')).toEqual({ alignSelf: "stretch" })
})

test('self-baseline namespace', () => {
  expect(apply('self-baseline')).toEqual({ alignSelf: "baseline" })
})
