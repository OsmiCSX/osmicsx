import opacity from "../../src/opacity";

test('opacity-0 namespace', () => {
  expect(opacity["opacity-0"]).toEqual({ opacity: 0 })
})

test('opacity-25 namespace', () => {
  expect(opacity["opacity-25"]).toEqual({ opacity: 0.25 })
})

test('opacity-50 namespace', () => {
  expect(opacity["opacity-50"]).toEqual({ opacity: 0.50 })
})

test('opacity-75 namespace', () => {
  expect(opacity["opacity-75"]).toEqual({ opacity: 0.75 })
})

test('opacity-100 namespace', () => {
  expect(opacity["opacity-100"]).toEqual({ opacity: 1 })
})
