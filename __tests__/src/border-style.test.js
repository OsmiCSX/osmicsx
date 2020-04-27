import borderStyle from "../../src/border-style";

test('border-solid namespace', () => {
  expect(borderStyle["border-solid"]).toEqual({ borderStyle: "solid" })
})

test('border-dotted namespace', () => {
  expect(borderStyle["border-dotted"]).toEqual({ borderStyle: "dotted" })
})

test('border-dashed namespace', () => {
  expect(borderStyle["border-dashed"]).toEqual({ borderStyle: "dashed" })
})
