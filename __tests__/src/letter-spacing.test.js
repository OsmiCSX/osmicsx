import letterSpacing from "../../src/letter-spacing";

test('traacking-tighter namespace', () => {
  expect(letterSpacing["tracking-tighter"]).toEqual({ letterSpacing: -0.8 })
})

test('tracking-widest namespace', () => {
  expect(letterSpacing["tracking-widest"]).toEqual({ letterSpacing: 1.6 })
})

test('tracking-normal namespace', () => {
  expect(letterSpacing["tracking-normal"]).toEqual({ letterSpacing: 0 })
})

test('tracking-wider namespace', () => {
  expect(letterSpacing["tracking-wider"]).toEqual({ letterSpacing: 0.8 })
})

test('tracking-tight namespace', () => {
  expect(letterSpacing["tracking-tight"]).toEqual({ letterSpacing: -0.4 })
})

test('tracking-wide', () => {
  expect(letterSpacing["tracking-wide"]).toEqual({ letterSpacing: 0.4 })
})
