import apply from "../../dist/core/apply";

test("uppercase namespace", () => {
  expect(apply("uppercase")).toEqual({ textTransform: "uppercase" });
});

test("lowercase namespace", () => {
  expect(apply("lowercase")).toEqual({ textTransform: "lowercase" });
});

test("capitalize namespace", () => {
  expect(apply("capitalize")).toEqual({ textTransform: "capitalize" });
});

test("normal-case namespace", () => {
  expect(apply("normal-case")).toEqual({ textTransform: "normal-case" });
});
