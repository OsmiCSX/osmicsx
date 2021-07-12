import apply from "../../dist/core/apply";

test("shadow-none namespace", () => {
  expect(apply("shadow-none")).toEqual({ elevation: 0, shadowOpacity: 0 })
})


test("shadow-xs namespace", () => {
  expect(apply("shadow-xs")).toEqual({
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  });
})

test("shadow-sm namespace", () => {
  expect(apply("shadow-sm")).toEqual({
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  });
})

test("shadow namespace", () => {
  expect(apply("shadow")).toEqual({
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  });
})

test("shadow-md namespace", () => {
  expect(apply("shadow-md")).toEqual({
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  })
})

test("shadow-lg namespace", () => {
  expect(apply("shadow-lg")).toEqual({
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  })
})

test("shadow-xl namespace", () => {
  expect(apply("shadow-xl")).toEqual({
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  })
})

test("shadow-2xl namespace", () => {
  expect(apply("shadow-2xl")).toEqual({
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  })
})
