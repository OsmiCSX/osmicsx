import apply from "../../dist/core/apply"

test('bg-black with default opacity', () => {
  expect(apply("bg-black")).toEqual({ backgroundColor: "rgba(0, 0, 0, 1)"})
})

test('bg-black with opacity 25', () => {
  expect(apply("bg-black bg-opacity-25")).toEqual({ backgroundColor: "rgba(0, 0, 0, 0.25)"})
})

test('bg-red-500 with opacity 25', () => {
  expect(apply("bg-red-500 bg-opacity-25")).toEqual({ backgroundColor: "rgba(239, 68, 68, 0.25)"})
})
