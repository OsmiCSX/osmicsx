import apply from "../../dist/core/apply";

test('full namespace', () => {
  expect(apply("full")).toEqual({ width: '100%' })
})

test('flex namespace', () => {
  expect(apply("flex")).toEqual({ flex: 1 })
})

test('flex-0 namespace', () => {
  expect(apply("flex-0")).toEqual({ flex: 0 })
})

test('flex-2 namespace', () => {
  expect(apply("flex-2")).toEqual({ flex: 2 })
})

test('flex-3 namespace', () => {
  expect(apply("flex-3")).toEqual({ flex: 3 })
})

test('flex-4 namespace', () => {
  expect(apply("flex-4")).toEqual({ flex: 4 })
})

test('flex-5 namespace', () => {
  expect(apply("flex-5")).toEqual({ flex: 5 })
})

test('flex-6 namespace', () => {
  expect(apply("flex-6")).toEqual({ flex: 6 })
})

test('flex-7 namespace', () => {
  expect(apply("flex-7")).toEqual({ flex: 7 })
})

test('flex-8 namespace', () => {
  expect(apply("flex-8")).toEqual({ flex: 8 })
})

test('flex-9 namespace', () => {
  expect(apply("flex-9")).toEqual({ flex: 9 })
})

test('flex-10 namespace', () => {
  expect(apply("flex-10")).toEqual({ flex: 10 })
})

test('flex-11 namespace', () => {
  expect(apply("flex-11")).toEqual({ flex: 11 })
})

test('flex-12 namespace', () => {
  expect(apply("flex-12")).toEqual({ flex: 12 })
})
