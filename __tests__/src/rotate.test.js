import apply from "../../dist/core/apply";

test("rotate-0 namespace", () => {
  expect(apply("rotate-0")).toEqual({ transform: [{ rotate: "0" }] });
});

test("rotate-45 namespace", () => {
  expect(apply("rotate-45")).toEqual({ transform: [{ rotate: "45deg" }] });
});

test("rotate-90 namespace", () => {
  expect(apply("rotate-90")).toEqual({ transform: [{ rotate: "90deg" }] });
});

test("rotate-180 namespace", () => {
  expect(apply("rotate-180")).toEqual({ transform: [{ rotate: "180deg" }] });
});

test("-rotate-45 namespace", () => {
  expect(apply("-rotate-45")).toEqual({ transform: [{ rotate: "-45deg" }] });
});

test("-rotate-90 namespace", () => {
  expect(apply("-rotate-90")).toEqual({ transform: [{ rotate: "-90deg" }] });
});

test("-rotate-180 namespace", () => {
  expect(apply("-rotate-180")).toEqual({ transform: [{ rotate: "-180deg" }] });
});
