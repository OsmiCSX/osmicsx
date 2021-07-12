import apply from "../../dist/core/apply";

test("text-left namespace", () => {
  expect(apply("text-left")).toEqual({ textAlign: "left" });
});

test("text-center namespace", () => {
  expect(apply("text-center")).toEqual({ textAlign: "center" });
});

test("text-right namespace", () => {
  expect(apply("text-right")).toEqual({ textAlign: "right" });
});

test("text-justify namespace", () => {
  expect(apply("text-justify")).toEqual({ textAlign: "justify" });
});
