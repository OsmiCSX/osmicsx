import apply from "../../dist/core/apply";

test("fixed 100 width namespace", () => {
  expect(apply("w-100")).toEqual({ width: 100 });
});

test("fixed 75 width namespace", () => {
  expect(apply("w-75")).toEqual({ width: 75 });
});

test("fixed 50 width namespace", () => {
  expect(apply("w-50")).toEqual({ width: 50 });
});

test("100% width namespace", () => {
  expect(apply("w%100")).toEqual({ width: "100%" });
});

test("75% width namespace", () => {
  expect(apply("w%75")).toEqual({ width: "75%" });
});

test("50% width namespace", () => {
  expect(apply("w%50")).toEqual({ width: "50%" });
});