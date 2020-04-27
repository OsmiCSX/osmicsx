import flex from "../../src/flex";

test('full namespace', () => {
  expect(flex["full"]).toEqual({ width: '100%' })
})

test('flex namespace', () => {
  expect(flex["flex"]).toEqual({ flex: 1 })
})

test('flex-0 namespace', () => {
  expect(flex["flex-0"]).toEqual({ flex: 0 })
})

test('flex-2 namespace', () => {
  expect(flex["flex-2"]).toEqual({ flex: 2 })
})

test('flex-3 namespace', () => {
  expect(flex["flex-3"]).toEqual({ flex: 3 })
})

test('flex-4 namespace', () => {
  expect(flex["flex-4"]).toEqual({ flex: 4 })
})

test('flex-5 namespace', () => {
  expect(flex["flex-5"]).toEqual({ flex: 5 })
})

test('flex-6 namespace', () => {
  expect(flex["flex-6"]).toEqual({ flex: 6 })
})

test('flex-7 namespace', () => {
  expect(flex["flex-7"]).toEqual({ flex: 7 })
})

test('flex-8 namespace', () => {
  expect(flex["flex-8"]).toEqual({ flex: 8 })
})

test('flex-9 namespace', () => {
  expect(flex["flex-9"]).toEqual({ flex: 9 })
})

test('flex-10 namespace', () => {
  expect(flex["flex-10"]).toEqual({ flex: 10 })
})

test('flex-11 namespace', () => {
  expect(flex["flex-11"]).toEqual({ flex: 11 })
})

test('flex-12 namespace', () => {
  expect(flex["flex-12"]).toEqual({ flex: 12 })
})
