import apply from "../../dist/core/apply";

test("skew-x-50 namespace", () => {
  expect(apply("skew-x-50")).toEqual({ transform: [{ skewX: "50deg" }] })
});

test("skew-x-75 namespace", () => {
  expect(apply("skew-x-75")).toEqual({ transform: [{ skewX: "75deg" }] })
});

test("skew-x-100 namespace", () => {
  expect(apply("skew-x-100")).toEqual({ transform: [{ skewX: "100deg" }] })
});

test("skew-y-50 namespace", () => {
  expect(apply("skew-y-50")).toEqual({ transform: [{ skewY: "50deg" }] })
});

test("skew-y-75 namespace", () => {
  expect(apply("skew-y-75")).toEqual({ transform: [{ skewY: "75deg" }] })
});

test("skew-y-100 namespace", () => {
  expect(apply("skew-y-100")).toEqual({ transform: [{ skewY: "100deg" }] })
});

test("-skew-x-50 namespace", () => {
  expect(apply("-skew-x-50")).toEqual({ transform: [{ skewX: "-50deg" }] })
});

test("-skew-x-75 namespace", () => {
  expect(apply("-skew-x-75")).toEqual({ transform: [{ skewX: "-75deg" }] })
});

test("-skew-x-100 namespace", () => {
  expect(apply("-skew-x-100")).toEqual({ transform: [{ skewX: "-100deg" }] })
});

test("-skew-y-50 namespace", () => {
  expect(apply("-skew-y-50")).toEqual({ transform: [{ skewY: "-50deg" }] })
});

test("-skew-y-75 namespace", () => {
  expect(apply("-skew-y-75")).toEqual({ transform: [{ skewY: "-75deg" }] })
});

test("-skew-y-100 namespace", () => {
  expect(apply("-skew-y-100")).toEqual({ transform: [{ skewY: "-100deg" }] })
});