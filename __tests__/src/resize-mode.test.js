import resizeMode from "../../src/resize-mode";

test('resize-cover namespace', () => {
  expect(resizeMode["resize-cover"]).toEqual({ resizeMode: "cover" })
})

test('resize-contain namespace', () => {
  expect(resizeMode["resize-contain"]).toEqual({ resizeMode: "contain" })
})

test('resize-stretch namespace', () => {
  expect(resizeMode["resize-stretch"]).toEqual({ resizeMode: "stretch" })
})

test('resize-center namespace', () => {
  expect(resizeMode["resize-center"]).toEqual({ resizeMode: "center" })
})

test('resize-repeat namespace', () => {
  expect(resizeMode["resize-repeat"]).toEqual({ resizeMode: "repeat" })
})

