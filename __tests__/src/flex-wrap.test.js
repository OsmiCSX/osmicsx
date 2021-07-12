import apply from "../../dist/core/apply";

test('wrap namespace', () => {
  expect(apply("wrap")).toEqual({ flexWrap: "wrap" })
})

test('no-wrap namespace', () => {
  expect(apply("no-wrap")).toEqual({ flexWrap: "nowrap" })
})
