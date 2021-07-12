import apply from '../../dist/core/apply';

test('traacking-tighter namespace', () => {
  expect(apply("tracking-tighter")).toEqual({ letterSpacing: -0.8 })
})

test('tracking-widest namespace', () => {
  expect(apply("tracking-widest")).toEqual({ letterSpacing: 1.6 })
})

test('tracking-normal namespace', () => {
  expect(apply("tracking-normal")).toEqual({ letterSpacing: 0 })
})

test('tracking-wider namespace', () => {
  expect(apply("tracking-wider")).toEqual({ letterSpacing: 0.8 })
})

test('tracking-tight namespace', () => {
  expect(apply("tracking-tight")).toEqual({ letterSpacing: -0.4 })
})

test('tracking-wide', () => {
  expect(apply("tracking-wide")).toEqual({ letterSpacing: 0.4 })
})
