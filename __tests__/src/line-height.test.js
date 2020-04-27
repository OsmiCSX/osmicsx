import lineHeight from "../../src/line-height";

test('leading-normal namespace', () => {
  expect(lineHeight["leading-normal"]).toEqual({ lineHeight: 1.5 })
})

test('leading-relaxed namespace', () => {
  expect(lineHeight["leading-relaxed"]).toEqual({ lineHeight: 1.625 })
})

test('leading-tight namespace', () => {
  expect(lineHeight["leading-tight"]).toEqual({ lineHeight: 1.25 })
})

test('leading-loose namespace', () => {
  expect(lineHeight["leading-loose"]).toEqual({ lineHeight: 2 })
})

test('leading-none namespace', () => {
  expect(lineHeight["leading-none"]).toEqual({ lineHeight: 1 })
})

test('leading-snug namespace', () => {
  expect(lineHeight["leading-snug"]).toEqual({ lineHeight: 1.375 })
})

test('leading-10 namespace', () => {
  expect(lineHeight["leading-10"]).toEqual({ lineHeight: 40 })
})

test('leading-3 namespace', () => {
  expect(lineHeight["leading-3"]).toEqual({ lineHeight: 12 })
})

test('leading-4 namespace', () => {
  expect(lineHeight["leading-4"]).toEqual({ lineHeight: 16 })
})

test('leading-5 namespace', () => {
  expect(lineHeight["leading-5"]).toEqual({ lineHeight: 20 })
})

test('leading-6 namespace', () => {
  expect(lineHeight["leading-6"]).toEqual({ lineHeight: 24 })
})

test('leading-7 namespace', () => {
  expect(lineHeight["leading-7"]).toEqual({ lineHeight: 28 })
})

test('leading-8 namespace', () => {
  expect(lineHeight["leading-8"]).toEqual({ lineHeight: 32 })
})

test('leading-9 namespace', () => {
  expect(lineHeight["leading-9"]).toEqual({ lineHeight: 36 })
})
