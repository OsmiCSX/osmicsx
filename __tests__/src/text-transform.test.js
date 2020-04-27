import textTransform from "../../src/text-transform";

test("uppercase namespace", () => {
  expect(textTransform["uppercase"]).toEqual({ textTransform: "uppercase" })
})

test("lowercase namespace", () => {
  expect(textTransform["lowercase"]).toEqual({ textTransform: "lowercase" })
})

test("capitalize namespace", () => {
  expect(textTransform["capitalize"]).toEqual({ textTransform: "capitalize" })
})

test("normal-case namespace", () => {
  expect(textTransform["normal-case"]).toEqual({ textTransform: "normal-case" })
})
