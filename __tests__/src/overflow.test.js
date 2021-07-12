import apply from "../../dist/core/apply";

test("overflow-visible namespace", () => {
  expect(apply("overflow-visible")).toEqual({ overflow: "visible" });
});

test("overflow-hidden namespace", () => {
  expect(apply("overflow-hidden")).toEqual({ overflow: "hidden" });
});
