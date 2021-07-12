import apply from "../../dist/core/apply";

test("absolute namespace", () => {
  expect(apply("absolute")).toEqual({ position: "absolute" });
});

test("relative namespace", () => {
  expect(apply("relative")).toEqual({ position: "relative" });
});
