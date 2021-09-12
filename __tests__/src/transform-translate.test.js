import apply from "../../dist/core/apply";

test("translate-x-50 namespace", () => {
  expect(apply("translate-x-50")).toEqual({ transform: [{ translateX: 50 }] })
});

test("translate-x-75 namespace", () => {
  expect(apply("translate-x-75")).toEqual({ transform: [{ translateX: 75 }] })
});

test("translate-x-100 namespace", () => {
  expect(apply("translate-x-100")).toEqual({ transform: [{ translateX: 100 }] })
});

test("translate-y-50 namespace", () => {
  expect(apply("translate-y-50")).toEqual({ transform: [{ translateY: 50 }] })
});

test("translate-y-75 namespace", () => {
  expect(apply("translate-y-75")).toEqual({ transform: [{ translateY: 75 }] })
});

test("translate-y-100 namespace", () => {
  expect(apply("translate-y-100")).toEqual({ transform: [{ translateY: 100 }] })
});

test("-translate-x-50 namespace", () => {
  expect(apply("-translate-x-50")).toEqual({ transform: [{ translateX: -50 }] })
});

test("-translate-x-75 namespace", () => {
  expect(apply("-translate-x-75")).toEqual({ transform: [{ translateX: -75 }] })
});

test("-translate-x-100 namespace", () => {
  expect(apply("-translate-x-100")).toEqual({ transform: [{ translateX: -100 }] })
});

test("-translate-y-50 namespace", () => {
  expect(apply("-translate-y-50")).toEqual({ transform: [{ translateY: -50 }] })
});

test("-translate-y-75 namespace", () => {
  expect(apply("-translate-y-75")).toEqual({ transform: [{ translateY: -75 }] })
});

test("-translate-y-100 namespace", () => {
  expect(apply("-translate-y-100")).toEqual({ transform: [{ translateY: -100 }] })
});