import textSize from "../../src/text-size";

test('text-base namespace', () => {
  expect(textSize["text-base"]).toEqual({ fontSize: 16 })
})

test('text-xs namespace', () => {
  expect(textSize["text-xs"]).toEqual({ fontSize: 12 })
})

test('text-sm namespace', () => {
  expect(textSize["text-sm"]).toEqual({ fontSize: 14 })
})

test('text-lg namespace', () => {
  expect(textSize["text-lg"]).toEqual({ fontSize: 18 })
})

test('text-xl namespace', () => {
  expect(textSize["text-xl"]).toEqual({ fontSize: 20 })
})

test('text-2xl namespace', () => {
  expect(textSize["text-2xl"]).toEqual({ fontSize: 22 })
})

test('text-3xl namespace', () => {
  expect(textSize["text-3xl"]).toEqual({ fontSize: 24})
})

test('text-4xl namespace', () => {
  expect(textSize["text-4xl"]).toEqual({ fontSize: 26})
})

test('text-5xl namespace', () => {
  expect(textSize["text-5xl"]).toEqual({ fontSize: 28})
})

test('text-6xl namespace', () => {
  expect(textSize["text-6xl"]).toEqual({ fontSize: 30})
})
