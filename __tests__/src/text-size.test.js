import apply from "../../dist/core/apply";

test("text-base namespace", () => {
  expect(apply("text-base")).toEqual({ fontSize: 16 });
});

test("text-xs namespace", () => {
  expect(apply("text-xs")).toEqual({ fontSize: 12 });
});

test("text-sm namespace", () => {
  expect(apply("text-sm")).toEqual({ fontSize: 14 });
});

test("text-lg namespace", () => {
  expect(apply("text-lg")).toEqual({ fontSize: 18 });
});

test("text-xl namespace", () => {
  expect(apply("text-xl")).toEqual({ fontSize: 20 });
});

test("text-2xl namespace", () => {
  expect(apply("text-2xl")).toEqual({ fontSize: 22 });
});

test("text-3xl namespace", () => {
  expect(apply("text-3xl")).toEqual({ fontSize: 24 });
});

test("text-4xl namespace", () => {
  expect(apply("text-4xl")).toEqual({ fontSize: 26 });
});

test("text-5xl namespace", () => {
  expect(apply("text-5xl")).toEqual({ fontSize: 28 });
});

test("text-6xl namespace", () => {
  expect(apply("text-6xl")).toEqual({ fontSize: 30 });
});
