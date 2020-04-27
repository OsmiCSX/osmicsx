import verticalAlign from "../../src/vertical-align";

test("align-auto namespace", () => {
  expect(verticalAlign["align-auto"]).toEqual({ textAlignVertical: "auto" })
})

test("align-top namespace", () => {
  expect(verticalAlign["align-top"]).toEqual({ textAlignVertical: "top" })
})

test("align-bottom namespace", () => {
  expect(verticalAlign["align-bottom"]).toEqual({ textAlignVertical: "bottom" })
})

test("align-center namespace", () => {
  expect(verticalAlign["align-center"]).toEqual({ textAlignVertical: "center" })
})

