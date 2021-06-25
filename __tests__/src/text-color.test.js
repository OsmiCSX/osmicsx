import apply from "../../lib/apply"

test("text-black with default opacity", () => {
  expect(apply("text-black")).toEqual({ color: "rgba(0, 0, 0, 1)"})
})

test("text-black with opacity 25", () => {
  expect(apply("text-black text-opacity-25")).toEqual({ color: "rgba(0, 0, 0, 0.25)"})
})
