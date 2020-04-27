import trbl from "../../src/trbl";

test("bottom-auto namespace", () => {
  expect(trbl["bottom-auto"]).toEqual({ bottom: "auto" })
})

test("inset-x-auto namespace", () => {
  expect(trbl["inset-x-auto"]).toEqual({ right: "auto", left: "auto" })
})

test("inset-y-auto namespace", () => {
  expect(trbl["inset-y-auto"]).toEqual({ top: "auto", bottom: "auto" })
})

test("inset-auto namespace", () => {
  expect(trbl["inset-auto"]).toEqual({ top: "auto", right: "auto", bottom: "auto", left: "auto" })
})

test("right-auto namespace", () => {
  expect(trbl["right-auto"]).toEqual({ right: "auto" })
})

test("bottom-0 namespace", () => {
  expect(trbl["bottom-0"]).toEqual({ bottom: 0 })
})

test("bottom-4 namespace", () => {
  expect(trbl["bottom-4"]).toEqual({ bottom: 10 })
})

test("bottom-2 namespace", () => {
  expect(trbl["bottom-2"]).toEqual({ bottom: 2 })
})

test("top-auto namespace", () => {
  expect(trbl["top-auto"]).toEqual({ top: "auto" })
})

test("bottom-3 namespace", () => {
  expect(trbl["bottom-3"]).toEqual({ bottom: 6 })
})

test("top-0 namespace", () => {
  expect(trbl["top-0"]).toEqual({ top: 0 })
})

test("top-2 namespace", () => {
  expect(trbl["top-2"]).toEqual({ top: 2 })
})

test("top-3 namespace", () => {
  expect(trbl["top-3"]).toEqual({ top: 6 })
})

test("top-4 namespace", () => {
  expect(trbl["top-4"]).toEqual({ top: 10 })
})

test("inset-y-0 namespace", () => {
  expect(trbl["inset-y-0"]).toEqual({ top: 0, bottom: 0 })
})

test("inset-x-0 namespace", () => {
  expect(trbl["inset-x-0"]).toEqual({ right: 0, left: 0 })
})

test("inset-y-2 namespace", () => {
  expect(trbl["inset-y-2"]).toEqual({ top: 2, bottom: 2 })
})

test("inset-x-2 namespace", () => {
  expect(trbl["inset-x-2"]).toEqual({ right: 2, left: 2 })
})

test("left-auto namespace", () => {
  expect(trbl["left-auto"]).toEqual({ left: "auto" })
})

test("inset-y-3 namespace", () => {
  expect(trbl["inset-y-3"]).toEqual({ top: 6, bottom: 6 })
})

test("inset-x-3 namespace", () => {
  expect(trbl["inset-x-3"]).toEqual({ right: 6, left: 6 })
})

test("inset-y-4 namespace", () => {
  expect(trbl["inset-y-4"]).toEqual({ top: 10, bottom: 10 })
})

test("inset-x-4 namespace", () => {
  expect(trbl["inset-x-4"]).toEqual({ right: 10, left: 10 })
})

test("inset-0 namespace", () => {
  expect(trbl["inset-0"]).toEqual({ top: 0, right: 0, bottom: 0, left: 0 })
})

test("right-0 namespace", () => {
  expect(trbl["right-0"]).toEqual({ right: 0 })
})

test("inset-2 namespace", () => {
  expect(trbl["inset-2"]).toEqual({ top: 2, right: 2, bottom: 2, left: 2 })
})

test("right-3 namespace", () => {
  expect(trbl["right-3"]).toEqual({ right: 6 })
})

test("inset-4 namespace", () => {
  expect(trbl["inset-4"]).toEqual({ top: 10, right: 10, bottom: 10, left: 10 })
})

test("inset-3 namespace", () => {
  expect(trbl["inset-3"]).toEqual({ top: 6, right: 6, bottom: 6, left: 6 })
})

test("right-4 namespace", () => {
  expect(trbl["right-4"]).toEqual({ right: 10 })
})

test("right-2 namespace", () => {
  expect(trbl["right-2"]).toEqual({ right: 2 })
})

test("left-0 namespace", () => {
  expect(trbl["left-0"]).toEqual({ left: 0 })
})

test("left-3 namespace", () => {
  expect(trbl["left-3"]).toEqual({ left: 6 })
})

test("left-4 namespace", () => {
  expect(trbl["left-4"]).toEqual({ left: 10 })
})

test("left-2 namespace", () => {
  expect(trbl["left-2"]).toEqual({ left: 2 })
})
