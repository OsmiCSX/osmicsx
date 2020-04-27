import textStyle from "../../src/text-style";

test('italic namespace', () => {
  expect(textStyle["italic"]).toEqual({ fontStyle: "italic" })
})

test('underline namespace', () => {
  expect(textStyle["underline"]).toEqual({ textDecorationLine: "underline" })
})

test('font-light namespace', () => {
  expect(textStyle["font-light"]).toEqual({ fontWeight: "300" })
})

test('font-black namespace', () => {
  expect(textStyle["font-black"]).toEqual({ fontWeight: "900" })
})

test('font-normal namespace', () => {
  expect(textStyle["font-normal"]).toEqual({ fontWeight: "400" })
})

test('font-medium namespace', () => {
  expect(textStyle["font-medium"]).toEqual({ fontWeight: "500" })
})

test('font-bold namespace', () => {
  expect(textStyle["font-bold"]).toEqual({ fontWeight: "700" })
})

test('font-thin namespace', () => {
  expect(textStyle["font-thin"]).toEqual({ fontWeight: "200" })
})

test('line-through namespace', () => {
  expect(textStyle["line-through"]).toEqual({ textDecorationLine: "line-through" })
})

test('no-underline namespace', () => {
  expect(textStyle["no-underline"]).toEqual({ textDecorationLine: "none" })
})

test('font-hairline namespace', () => {
  expect(textStyle["font-hairline"]).toEqual({ fontWeight: "100" })
})

test('font-semibold namespace', () => {
  expect(textStyle["font-semibold"]).toEqual({ fontWeight: "600" })
})

test('font-extrabold namespace', () => {
  expect(textStyle["font-extrabold"]).toEqual({ fontWeight: "800" })
})
