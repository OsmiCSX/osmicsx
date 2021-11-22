import apply from "../../dist/core/apply";

test("min-w namespace", () => {
  expect(apply("min-w%50")).toEqual({ minWidth: "50%"})
})

test("w namespace", () => {
  expect(apply("w%50")).toEqual({ width: "50%"})
})

test("max-w namespace", () => {
  expect(apply("max-w%50")).toEqual({ maxWidth: "50%"})
})

test("min-h namespace", () => {
  expect(apply("min-h%50")).toEqual({ minHeight: "50%"})
})

test("h namespace", () => {
  expect(apply("h%50")).toEqual({ height: "50%"})
})

test("max-h namespace", () => {
  expect(apply("max-h%50")).toEqual({ maxHeight: "50%"})
})

test("text namespace", () => {
  expect(apply("text%50")).toEqual({ fontSize: "50%"})
})
