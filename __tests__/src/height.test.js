import apply from "../../dist/core/apply";

test("fixed 100 height namespace", () => {
  expect(apply("h-100")).toEqual({ height: 100 });
});

test("fixed 75 height namespace", () => {
  expect(apply("h-75")).toEqual({ height: 75 });
});

test("fixed 50 height namespace", () => {
  expect(apply("h-50")).toEqual({ height: 50 });
});

test("100% height namespace", () => {
  expect(apply("h%100")).toEqual({ height: "100%" });
});

test("75% height namespace", () => {
  expect(apply("h%75")).toEqual({ height: "75%" });
});

test("50% height namespace", () => {
  expect(apply("h%50")).toEqual({ height: "50%" });
});