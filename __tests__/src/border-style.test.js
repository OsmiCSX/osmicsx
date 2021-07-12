import apply from "../../dist/core/apply";

test('border-solid namespace', () => {
  expect(apply("border-solid")).toEqual({ borderStyle: "solid" })
})

test('border-dotted namespace', () => {
  expect(apply("border-dotted")).toEqual({ borderStyle: "dotted" })
})

test('border-dashed namespace', () => {
  expect(apply("border-dashed")).toEqual({ borderStyle: "dashed" })
})
