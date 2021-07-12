import apply from "../../dist/core/apply";

test("opacity-0 namespace", () => {
  expect(apply("opacity-0")).toEqual({ opacity: 0 });
});

test("opacity-25 namespace", () => {
  expect(apply("opacity-25")).toEqual({ opacity: 0.25 });
});

test("opacity-50 namespace", () => {
  expect(apply("opacity-50")).toEqual({ opacity: 0.5 });
});

test("opacity-75 namespace", () => {
  expect(apply("opacity-75")).toEqual({ opacity: 0.75 });
});

test("opacity-100 namespace", () => {
  expect(apply("opacity-100")).toEqual({ opacity: 1 });
});
