import apply from "../../dist/core/apply"

test("border-black with default opacity", () => {
  expect(apply("border-black")).toEqual({ borderColor: "rgba(0, 0, 0, 1)"})
})

test("border-black with opacity 25", () => {
  expect(apply("border-black border-opacity-25")).toEqual({ borderColor: "rgba(0, 0, 0, 0.25)"})
})
