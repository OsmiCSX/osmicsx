import apply from "../../dist/core/apply";

test("align-auto namespace", () => {
  expect(apply("align-auto")).toEqual({ textAlignVertical: "auto" });
});

test("align-top namespace", () => {
  expect(apply("align-top")).toEqual({ textAlignVertical: "top" });
});

test("align-bottom namespace", () => {
  expect(apply("align-bottom")).toEqual({ textAlignVertical: "bottom" });
});

test("align-center namespace", () => {
  expect(apply("align-center")).toEqual({ textAlignVertical: "center" });
});
