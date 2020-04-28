import flexDirection from "../../src/flex-direction";

test('row namespace', () => {
  expect(flexDirection["row"]).toEqual({ flexDirection: "row" })
})

test('col namespace', () => {
  expect(flexDirection["col"]).toEqual({ flexDirection: "column" })
})

test('row-reverse namespace', () => {
  expect(flexDirection["row-reverse"]).toEqual({ flexDirection: "row-reverse" })
})

test('col-reverse namespace', () => {
  expect(flexDirection["col-reverse"]).toEqual({ flexDirection: "column-reverse" })
})
