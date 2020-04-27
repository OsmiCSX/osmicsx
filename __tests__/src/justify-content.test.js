import justifyContent from "../../src/justify-content";

test('justify-end namespace', () => {
  expect(justifyContent["justify-end"]).toEqual({ justifyContent: "flex-end" })
})

test('justify-center namespace', () => {
  expect(justifyContent["justify-center"]).toEqual({ justifyContent: "center" })
})

test('justify-between namespace', () => {
  expect(justifyContent["justify-between"]).toEqual({ justifyContent: "space-between" })
})

test('justify-start namespace', () => {
  expect(justifyContent["justify-start"]).toEqual({ justifyContent: "flex-start" })
})

test('justify-evenly namespace', () => {
  expect(justifyContent["justify-evenly"]).toEqual({ justifyContent: "space-evenly" })
})

test('justify-around namespace', () => {
  expect(justifyContent["justify-around"]).toEqual({ justifyContent: "space-around" })
})

