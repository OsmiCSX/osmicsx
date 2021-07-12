import apply from "../../dist/core/apply";

test("resize-cover namespace", () => {
  expect(apply("resize-cover")).toEqual({ resizeMode: "cover" });
});

test("resize-contain namespace", () => {
  expect(apply("resize-contain")).toEqual({ resizeMode: "contain" });
});

test("resize-stretch namespace", () => {
  expect(apply("resize-stretch")).toEqual({ resizeMode: "stretch" });
});

test("resize-center namespace", () => {
  expect(apply("resize-center")).toEqual({ resizeMode: "center" });
});

test("resize-repeat namespace", () => {
  expect(apply("resize-repeat")).toEqual({ resizeMode: "repeat" });
});
