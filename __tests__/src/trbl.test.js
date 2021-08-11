import apply from "../../dist/core/apply";

test("inset-0 namespace", () => {
  expect(apply("inset-0")).toEqual({ "top": 0, "right": 0, "bottom": 0, "left": 0 })
});

test("inset-y-0 namespace", () => {
  expect(apply("inset-y-0")).toEqual({ "top": 0, "bottom": 0 })
});

test("inset-x-0 namespace", () => {
  expect(apply("inset-x-0")).toEqual({ "right": 0, "left": 0 })
});

test("top-0 namespace", () => {
  expect(apply("top-0")).toEqual({ "top": 0 })
});

test("right-0 namespace", () => {
  expect(apply("right-0")).toEqual({ "right": 0 })
});

test("bottom-0 namespace", () => {
  expect(apply("bottom-0")).toEqual({ "bottom": 0 })
});

test("left-0 namespace", () => {
  expect(apply("left-0")).toEqual({ "left": 0 })
});

test("inset-auto namespace", () => {
  expect(apply("inset-auto")).toEqual({ "top": "auto", "right": "auto", "bottom": "auto", "left": "auto" })
});

test("inset-y-auto namespace", () => {
  expect(apply("inset-y-auto")).toEqual({ "top": "auto", "bottom": "auto" })
});

test("inset-x-auto namespace", () => {
  expect(apply("inset-x-auto")).toEqual({ "right": "auto", "left": "auto" })
});

test("top-auto namespace", () => {
  expect(apply("top-auto")).toEqual({ "top": "auto" })
});

test("right-auto namespace", () => {
  expect(apply("right-auto")).toEqual({ "right": "auto" })
});

test("bottom-auto namespace", () => {
  expect(apply("bottom-auto")).toEqual({ "bottom": "auto" })
});

test("left-auto namespace", () => {
  expect(apply("left-auto")).toEqual({ "left": "auto" })
});

test("inset-1 namespace", () => {
  expect(apply("inset-1")).toEqual({ "top": 4, "right": 4, "bottom": 4, "left": 4 })
});

test("inset-2 namespace", () => {
  expect(apply("inset-2")).toEqual({ "top": 8, "right": 8, "bottom": 8, "left": 8 })
});

test("inset-3 namespace", () => {
  expect(apply("inset-3")).toEqual({ "top": 12, "right": 12, "bottom": 12, "left": 12 })
});

test("inset-4 namespace", () => {
  expect(apply("inset-4")).toEqual({ "top": 16, "right": 16, "bottom": 16, "left": 16 })
});

test("inset-5 namespace", () => {
  expect(apply("inset-5")).toEqual({ "top": 20, "right": 20, "bottom": 20, "left": 20 })
});

test("inset-6 namespace", () => {
  expect(apply("inset-6")).toEqual({ "top": 24, "right": 24, "bottom": 24, "left": 24 })
});

test("inset-7 namespace", () => {
  expect(apply("inset-7")).toEqual({ "top": 28, "right": 28, "bottom": 28, "left": 28 })
});

test("inset-8 namespace", () => {
  expect(apply("inset-8")).toEqual({ "top": 32, "right": 32, "bottom": 32, "left": 32 })
});

test("inset-9 namespace", () => {
  expect(apply("inset-9")).toEqual({ "top": 36, "right": 36, "bottom": 36, "left": 36 })
});

test("inset-10 namespace", () => {
  expect(apply("inset-10")).toEqual({ "top": 40, "right": 40, "bottom": 40, "left": 40 })
});

test("inset-12 namespace", () => {
  expect(apply("inset-12")).toEqual({ "top": 48, "right": 48, "bottom": 48, "left": 48 })
});

test("inset-16 namespace", () => {
  expect(apply("inset-16")).toEqual({ "top": 64, "right": 64, "bottom": 64, "left": 64 })
});

test("inset-20 namespace", () => {
  expect(apply("inset-20")).toEqual({ "top": 80, "right": 80, "bottom": 80, "left": 80 })
});

test("inset-24 namespace", () => {
  expect(apply("inset-24")).toEqual({ "top": 96, "right": 96, "bottom": 96, "left": 96 })
});

test("inset-32 namespace", () => {
  expect(apply("inset-32")).toEqual({ "top": 128, "right": 128, "bottom": 128, "left": 128 })
});

test("inset-40 namespace", () => {
  expect(apply("inset-40")).toEqual({ "top": 160, "right": 160, "bottom": 160, "left": 160 })
});

test("inset-48 namespace", () => {
  expect(apply("inset-48")).toEqual({ "top": 192, "right": 192, "bottom": 192, "left": 192 })
});

test("inset-56 namespace", () => {
  expect(apply("inset-56")).toEqual({ "top": 224, "right": 224, "bottom": 224, "left": 224 })
});

test("inset-64 namespace", () => {
  expect(apply("inset-64")).toEqual({ "top": 256, "right": 256, "bottom": 256, "left": 256 })
});

test("inset-px namespace", () => {
  expect(apply("inset-px")).toEqual({ "top": 2, "right": 2, "bottom": 2, "left": 2 })
});

test("inset-y-1 namespace", () => {
  expect(apply("inset-y-1")).toEqual({ "top": 4, "bottom": 4 })
});

test("inset-y-2 namespace", () => {
  expect(apply("inset-y-2")).toEqual({ "top": 8, "bottom": 8 })
});

test("inset-y-3 namespace", () => {
  expect(apply("inset-y-3")).toEqual({ "top": 12, "bottom": 12 })
});

test("inset-y-4 namespace", () => {
  expect(apply("inset-y-4")).toEqual({ "top": 16, "bottom": 16 })
});

test("inset-y-5 namespace", () => {
  expect(apply("inset-y-5")).toEqual({ "top": 20, "bottom": 20 })
});

test("inset-y-6 namespace", () => {
  expect(apply("inset-y-6")).toEqual({ "top": 24, "bottom": 24 })
});

test("inset-y-7 namespace", () => {
  expect(apply("inset-y-7")).toEqual({ "top": 28, "bottom": 28 })
});

test("inset-y-8 namespace", () => {
  expect(apply("inset-y-8")).toEqual({ "top": 32, "bottom": 32 })
});

test("inset-y-9 namespace", () => {
  expect(apply("inset-y-9")).toEqual({ "top": 36, "bottom": 36 })
});

test("inset-y-10 namespace", () => {
  expect(apply("inset-y-10")).toEqual({ "top": 40, "bottom": 40 })
});

test("inset-y-12 namespace", () => {
  expect(apply("inset-y-12")).toEqual({ "top": 48, "bottom": 48 })
});

test("inset-y-16 namespace", () => {
  expect(apply("inset-y-16")).toEqual({ "top": 64, "bottom": 64 })
});

test("inset-y-20 namespace", () => {
  expect(apply("inset-y-20")).toEqual({ "top": 80, "bottom": 80 })
});

test("inset-y-24 namespace", () => {
  expect(apply("inset-y-24")).toEqual({ "top": 96, "bottom": 96 })
});

test("inset-y-32 namespace", () => {
  expect(apply("inset-y-32")).toEqual({ "top": 128, "bottom": 128 })
});

test("inset-y-40 namespace", () => {
  expect(apply("inset-y-40")).toEqual({ "top": 160, "bottom": 160 })
});

test("inset-y-48 namespace", () => {
  expect(apply("inset-y-48")).toEqual({ "top": 192, "bottom": 192 })
});

test("inset-y-56 namespace", () => {
  expect(apply("inset-y-56")).toEqual({ "top": 224, "bottom": 224 })
});

test("inset-y-64 namespace", () => {
  expect(apply("inset-y-64")).toEqual({ "top": 256, "bottom": 256 })
});

test("inset-y-px namespace", () => {
  expect(apply("inset-y-px")).toEqual({ "top": 2, "bottom": 2 })
});

test("inset-x-1 namespace", () => {
  expect(apply("inset-x-1")).toEqual({ "right": 4, "left": 4 })
});

test("inset-x-2 namespace", () => {
  expect(apply("inset-x-2")).toEqual({ "right": 8, "left": 8 })
});

test("inset-x-3 namespace", () => {
  expect(apply("inset-x-3")).toEqual({ "right": 12, "left": 12 })
});

test("inset-x-4 namespace", () => {
  expect(apply("inset-x-4")).toEqual({ "right": 16, "left": 16 })
});

test("inset-x-5 namespace", () => {
  expect(apply("inset-x-5")).toEqual({ "right": 20, "left": 20 })
});

test("inset-x-6 namespace", () => {
  expect(apply("inset-x-6")).toEqual({ "right": 24, "left": 24 })
});

test("inset-x-7 namespace", () => {
  expect(apply("inset-x-7")).toEqual({ "right": 28, "left": 28 })
});

test("inset-x-8 namespace", () => {
  expect(apply("inset-x-8")).toEqual({ "right": 32, "left": 32 })
});

test("inset-x-9 namespace", () => {
  expect(apply("inset-x-9")).toEqual({ "right": 36, "left": 36 })
});

test("inset-x-10 namespace", () => {
  expect(apply("inset-x-10")).toEqual({ "right": 40, "left": 40 })
});

test("inset-x-12 namespace", () => {
  expect(apply("inset-x-12")).toEqual({ "right": 48, "left": 48 })
});

test("inset-x-16 namespace", () => {
  expect(apply("inset-x-16")).toEqual({ "right": 64, "left": 64 })
});

test("inset-x-20 namespace", () => {
  expect(apply("inset-x-20")).toEqual({ "right": 80, "left": 80 })
});

test("inset-x-24 namespace", () => {
  expect(apply("inset-x-24")).toEqual({ "right": 96, "left": 96 })
});

test("inset-x-32 namespace", () => {
  expect(apply("inset-x-32")).toEqual({ "right": 128, "left": 128 })
});

test("inset-x-40 namespace", () => {
  expect(apply("inset-x-40")).toEqual({ "right": 160, "left": 160 })
});

test("inset-x-48 namespace", () => {
  expect(apply("inset-x-48")).toEqual({ "right": 192, "left": 192 })
});

test("inset-x-56 namespace", () => {
  expect(apply("inset-x-56")).toEqual({ "right": 224, "left": 224 })
});

test("inset-x-64 namespace", () => {
  expect(apply("inset-x-64")).toEqual({ "right": 256, "left": 256 })
});

test("inset-x-px namespace", () => {
  expect(apply("inset-x-px")).toEqual({ "right": 2, "left": 2 })
});

test("top-1 namespace", () => {
  expect(apply("top-1")).toEqual({ "top": 4 })
});

test("top-2 namespace", () => {
  expect(apply("top-2")).toEqual({ "top": 8 })
});

test("top-3 namespace", () => {
  expect(apply("top-3")).toEqual({ "top": 12 })
});

test("top-4 namespace", () => {
  expect(apply("top-4")).toEqual({ "top": 16 })
});

test("top-5 namespace", () => {
  expect(apply("top-5")).toEqual({ "top": 20 })
});

test("top-6 namespace", () => {
  expect(apply("top-6")).toEqual({ "top": 24 })
});

test("top-7 namespace", () => {
  expect(apply("top-7")).toEqual({ "top": 28 })
});

test("top-8 namespace", () => {
  expect(apply("top-8")).toEqual({ "top": 32 })
});

test("top-9 namespace", () => {
  expect(apply("top-9")).toEqual({ "top": 36 })
});

test("top-10 namespace", () => {
  expect(apply("top-10")).toEqual({ "top": 40 })
});

test("top-12 namespace", () => {
  expect(apply("top-12")).toEqual({ "top": 48 })
});

test("top-16 namespace", () => {
  expect(apply("top-16")).toEqual({ "top": 64 })
});

test("top-20 namespace", () => {
  expect(apply("top-20")).toEqual({ "top": 80 })
});

test("top-24 namespace", () => {
  expect(apply("top-24")).toEqual({ "top": 96 })
});

test("top-32 namespace", () => {
  expect(apply("top-32")).toEqual({ "top": 128 })
});

test("top-40 namespace", () => {
  expect(apply("top-40")).toEqual({ "top": 160 })
});

test("top-48 namespace", () => {
  expect(apply("top-48")).toEqual({ "top": 192 })
});

test("top-56 namespace", () => {
  expect(apply("top-56")).toEqual({ "top": 224 })
});

test("top-64 namespace", () => {
  expect(apply("top-64")).toEqual({ "top": 256 })
});

test("top-px namespace", () => {
  expect(apply("top-px")).toEqual({ "top": 2 })
});

test("right-1 namespace", () => {
  expect(apply("right-1")).toEqual({ "right": 4 })
});

test("right-2 namespace", () => {
  expect(apply("right-2")).toEqual({ "right": 8 })
});

test("right-3 namespace", () => {
  expect(apply("right-3")).toEqual({ "right": 12 })
});

test("right-4 namespace", () => {
  expect(apply("right-4")).toEqual({ "right": 16 })
});

test("right-5 namespace", () => {
  expect(apply("right-5")).toEqual({ "right": 20 })
});

test("right-6 namespace", () => {
  expect(apply("right-6")).toEqual({ "right": 24 })
});

test("right-7 namespace", () => {
  expect(apply("right-7")).toEqual({ "right": 28 })
});

test("right-8 namespace", () => {
  expect(apply("right-8")).toEqual({ "right": 32 })
});

test("right-9 namespace", () => {
  expect(apply("right-9")).toEqual({ "right": 36 })
});

test("right-10 namespace", () => {
  expect(apply("right-10")).toEqual({ "right": 40 })
});

test("right-12 namespace", () => {
  expect(apply("right-12")).toEqual({ "right": 48 })
});

test("right-16 namespace", () => {
  expect(apply("right-16")).toEqual({ "right": 64 })
});

test("right-20 namespace", () => {
  expect(apply("right-20")).toEqual({ "right": 80 })
});

test("right-24 namespace", () => {
  expect(apply("right-24")).toEqual({ "right": 96 })
});

test("right-32 namespace", () => {
  expect(apply("right-32")).toEqual({ "right": 128 })
});

test("right-40 namespace", () => {
  expect(apply("right-40")).toEqual({ "right": 160 })
});

test("right-48 namespace", () => {
  expect(apply("right-48")).toEqual({ "right": 192 })
});

test("right-56 namespace", () => {
  expect(apply("right-56")).toEqual({ "right": 224 })
});

test("right-64 namespace", () => {
  expect(apply("right-64")).toEqual({ "right": 256 })
});

test("right-px namespace", () => {
  expect(apply("right-px")).toEqual({ "right": 2 })
});

test("bottom-1 namespace", () => {
  expect(apply("bottom-1")).toEqual({ "bottom": 4 })
});

test("bottom-2 namespace", () => {
  expect(apply("bottom-2")).toEqual({ "bottom": 8 })
});

test("bottom-3 namespace", () => {
  expect(apply("bottom-3")).toEqual({ "bottom": 12 })
});

test("bottom-4 namespace", () => {
  expect(apply("bottom-4")).toEqual({ "bottom": 16 })
});

test("bottom-5 namespace", () => {
  expect(apply("bottom-5")).toEqual({ "bottom": 20 })
});

test("bottom-6 namespace", () => {
  expect(apply("bottom-6")).toEqual({ "bottom": 24 })
});

test("bottom-7 namespace", () => {
  expect(apply("bottom-7")).toEqual({ "bottom": 28 })
});

test("bottom-8 namespace", () => {
  expect(apply("bottom-8")).toEqual({ "bottom": 32 })
});

test("bottom-9 namespace", () => {
  expect(apply("bottom-9")).toEqual({ "bottom": 36 })
});

test("bottom-10 namespace", () => {
  expect(apply("bottom-10")).toEqual({ "bottom": 40 })
});

test("bottom-12 namespace", () => {
  expect(apply("bottom-12")).toEqual({ "bottom": 48 })
});

test("bottom-16 namespace", () => {
  expect(apply("bottom-16")).toEqual({ "bottom": 64 })
});

test("bottom-20 namespace", () => {
  expect(apply("bottom-20")).toEqual({ "bottom": 80 })
});

test("bottom-24 namespace", () => {
  expect(apply("bottom-24")).toEqual({ "bottom": 96 })
});

test("bottom-32 namespace", () => {
  expect(apply("bottom-32")).toEqual({ "bottom": 128 })
});

test("bottom-40 namespace", () => {
  expect(apply("bottom-40")).toEqual({ "bottom": 160 })
});

test("bottom-48 namespace", () => {
  expect(apply("bottom-48")).toEqual({ "bottom": 192 })
});

test("bottom-56 namespace", () => {
  expect(apply("bottom-56")).toEqual({ "bottom": 224 })
});

test("bottom-64 namespace", () => {
  expect(apply("bottom-64")).toEqual({ "bottom": 256 })
});

test("bottom-px namespace", () => {
  expect(apply("bottom-px")).toEqual({ "bottom": 2 })
});

test("left-1 namespace", () => {
  expect(apply("left-1")).toEqual({ "left": 4 })
});

test("left-2 namespace", () => {
  expect(apply("left-2")).toEqual({ "left": 8 })
});

test("left-3 namespace", () => {
  expect(apply("left-3")).toEqual({ "left": 12 })
});

test("left-4 namespace", () => {
  expect(apply("left-4")).toEqual({ "left": 16 })
});

test("left-5 namespace", () => {
  expect(apply("left-5")).toEqual({ "left": 20 })
});

test("left-6 namespace", () => {
  expect(apply("left-6")).toEqual({ "left": 24 })
});

test("left-7 namespace", () => {
  expect(apply("left-7")).toEqual({ "left": 28 })
});

test("left-8 namespace", () => {
  expect(apply("left-8")).toEqual({ "left": 32 })
});

test("left-9 namespace", () => {
  expect(apply("left-9")).toEqual({ "left": 36 })
});

test("left-10 namespace", () => {
  expect(apply("left-10")).toEqual({ "left": 40 })
});

test("left-12 namespace", () => {
  expect(apply("left-12")).toEqual({ "left": 48 })
});

test("left-16 namespace", () => {
  expect(apply("left-16")).toEqual({ "left": 64 })
});

test("left-20 namespace", () => {
  expect(apply("left-20")).toEqual({ "left": 80 })
});

test("left-24 namespace", () => {
  expect(apply("left-24")).toEqual({ "left": 96 })
});

test("left-32 namespace", () => {
  expect(apply("left-32")).toEqual({ "left": 128 })
});

test("left-40 namespace", () => {
  expect(apply("left-40")).toEqual({ "left": 160 })
});

test("left-48 namespace", () => {
  expect(apply("left-48")).toEqual({ "left": 192 })
});

test("left-56 namespace", () => {
  expect(apply("left-56")).toEqual({ "left": 224 })
});

test("left-64 namespace", () => {
  expect(apply("left-64")).toEqual({ "left": 256 })
});

test("left-px namespace", () => {
  expect(apply("left-px")).toEqual({ "left": 2 })
});

test("-inset-1 namespace", () => {
  expect(apply("-inset-1")).toEqual({ "top": -4, "right": -4, "bottom": -4, "left": -4 })
});

test("-inset-2 namespace", () => {
  expect(apply("-inset-2")).toEqual({ "top": -8, "right": -8, "bottom": -8, "left": -8 })
});

test("-inset-3 namespace", () => {
  expect(apply("-inset-3")).toEqual({ "top": -12, "right": -12, "bottom": -12, "left": -12 })
});

test("-inset-4 namespace", () => {
  expect(apply("-inset-4")).toEqual({ "top": -16, "right": -16, "bottom": -16, "left": -16 })
});

test("-inset-5 namespace", () => {
  expect(apply("-inset-5")).toEqual({ "top": -20, "right": -20, "bottom": -20, "left": -20 })
});

test("-inset-6 namespace", () => {
  expect(apply("-inset-6")).toEqual({ "top": -24, "right": -24, "bottom": -24, "left": -24 })
});

test("-inset-7 namespace", () => {
  expect(apply("-inset-7")).toEqual({ "top": -28, "right": -28, "bottom": -28, "left": -28 })
});

test("-inset-8 namespace", () => {
  expect(apply("-inset-8")).toEqual({ "top": -32, "right": -32, "bottom": -32, "left": -32 })
});

test("-inset-9 namespace", () => {
  expect(apply("-inset-9")).toEqual({ "top": -36, "right": -36, "bottom": -36, "left": -36 })
});

test("-inset-10 namespace", () => {
  expect(apply("-inset-10")).toEqual({ "top": -40, "right": -40, "bottom": -40, "left": -40 })
});

test("-inset-12 namespace", () => {
  expect(apply("-inset-12")).toEqual({ "top": -48, "right": -48, "bottom": -48, "left": -48 })
});

test("-inset-16 namespace", () => {
  expect(apply("-inset-16")).toEqual({ "top": -64, "right": -64, "bottom": -64, "left": -64 })
});

test("-inset-20 namespace", () => {
  expect(apply("-inset-20")).toEqual({ "top": -80, "right": -80, "bottom": -80, "left": -80 })
});

test("-inset-24 namespace", () => {
  expect(apply("-inset-24")).toEqual({ "top": -96, "right": -96, "bottom": -96, "left": -96 })
});

test("-inset-32 namespace", () => {
  expect(apply("-inset-32")).toEqual({ "top": -128, "right": -128, "bottom": -128, "left": -128 })
});

test("-inset-40 namespace", () => {
  expect(apply("-inset-40")).toEqual({ "top": -160, "right": -160, "bottom": -160, "left": -160 })
});

test("-inset-48 namespace", () => {
  expect(apply("-inset-48")).toEqual({ "top": -192, "right": -192, "bottom": -192, "left": -192 })
});

test("-inset-56 namespace", () => {
  expect(apply("-inset-56")).toEqual({ "top": -224, "right": -224, "bottom": -224, "left": -224 })
});

test("-inset-64 namespace", () => {
  expect(apply("-inset-64")).toEqual({ "top": -256, "right": -256, "bottom": -256, "left": -256 })
});

test("-inset-px namespace", () => {
  expect(apply("-inset-px")).toEqual({ "top": -2, "right": -2, "bottom": -2, "left": -2 })
});

test("-inset-y-1 namespace", () => {
  expect(apply("-inset-y-1")).toEqual({ "top": -4, "bottom": -4 })
});

test("-inset-y-2 namespace", () => {
  expect(apply("-inset-y-2")).toEqual({ "top": -8, "bottom": -8 })
});

test("-inset-y-3 namespace", () => {
  expect(apply("-inset-y-3")).toEqual({ "top": -12, "bottom": -12 })
});

test("-inset-y-4 namespace", () => {
  expect(apply("-inset-y-4")).toEqual({ "top": -16, "bottom": -16 })
});

test("-inset-y-5 namespace", () => {
  expect(apply("-inset-y-5")).toEqual({ "top": -20, "bottom": -20 })
});

test("-inset-y-6 namespace", () => {
  expect(apply("-inset-y-6")).toEqual({ "top": -24, "bottom": -24 })
});

test("-inset-y-7 namespace", () => {
  expect(apply("-inset-y-7")).toEqual({ "top": -28, "bottom": -28 })
});

test("-inset-y-8 namespace", () => {
  expect(apply("-inset-y-8")).toEqual({ "top": -32, "bottom": -32 })
});

test("-inset-y-9 namespace", () => {
  expect(apply("-inset-y-9")).toEqual({ "top": -36, "bottom": -36 })
});

test("-inset-y-10 namespace", () => {
  expect(apply("-inset-y-10")).toEqual({ "top": -40, "bottom": -40 })
});

test("-inset-y-12 namespace", () => {
  expect(apply("-inset-y-12")).toEqual({ "top": -48, "bottom": -48 })
});

test("-inset-y-16 namespace", () => {
  expect(apply("-inset-y-16")).toEqual({ "top": -64, "bottom": -64 })
});

test("-inset-y-20 namespace", () => {
  expect(apply("-inset-y-20")).toEqual({ "top": -80, "bottom": -80 })
});

test("-inset-y-24 namespace", () => {
  expect(apply("-inset-y-24")).toEqual({ "top": -96, "bottom": -96 })
});

test("-inset-y-32 namespace", () => {
  expect(apply("-inset-y-32")).toEqual({ "top": -128, "bottom": -128 })
});

test("-inset-y-40 namespace", () => {
  expect(apply("-inset-y-40")).toEqual({ "top": -160, "bottom": -160 })
});

test("-inset-y-48 namespace", () => {
  expect(apply("-inset-y-48")).toEqual({ "top": -192, "bottom": -192 })
});

test("-inset-y-56 namespace", () => {
  expect(apply("-inset-y-56")).toEqual({ "top": -224, "bottom": -224 })
});

test("-inset-y-64 namespace", () => {
  expect(apply("-inset-y-64")).toEqual({ "top": -256, "bottom": -256 })
});

test("-inset-y-px namespace", () => {
  expect(apply("-inset-y-px")).toEqual({ "top": -2, "bottom": -2 })
});

test("-inset-x-1 namespace", () => {
  expect(apply("-inset-x-1")).toEqual({ "right": -4, "left": -4 })
});

test("-inset-x-2 namespace", () => {
  expect(apply("-inset-x-2")).toEqual({ "right": -8, "left": -8 })
});

test("-inset-x-3 namespace", () => {
  expect(apply("-inset-x-3")).toEqual({ "right": -12, "left": -12 })
});

test("-inset-x-4 namespace", () => {
  expect(apply("-inset-x-4")).toEqual({ "right": -16, "left": -16 })
});

test("-inset-x-5 namespace", () => {
  expect(apply("-inset-x-5")).toEqual({ "right": -20, "left": -20 })
});

test("-inset-x-6 namespace", () => {
  expect(apply("-inset-x-6")).toEqual({ "right": -24, "left": -24 })
});

test("-inset-x-7 namespace", () => {
  expect(apply("-inset-x-7")).toEqual({ "right": -28, "left": -28 })
});

test("-inset-x-8 namespace", () => {
  expect(apply("-inset-x-8")).toEqual({ "right": -32, "left": -32 })
});

test("-inset-x-9 namespace", () => {
  expect(apply("-inset-x-9")).toEqual({ "right": -36, "left": -36 })
});

test("-inset-x-10 namespace", () => {
  expect(apply("-inset-x-10")).toEqual({ "right": -40, "left": -40 })
});

test("-inset-x-12 namespace", () => {
  expect(apply("-inset-x-12")).toEqual({ "right": -48, "left": -48 })
});

test("-inset-x-16 namespace", () => {
  expect(apply("-inset-x-16")).toEqual({ "right": -64, "left": -64 })
});

test("-inset-x-20 namespace", () => {
  expect(apply("-inset-x-20")).toEqual({ "right": -80, "left": -80 })
});

test("-inset-x-24 namespace", () => {
  expect(apply("-inset-x-24")).toEqual({ "right": -96, "left": -96 })
});

test("-inset-x-32 namespace", () => {
  expect(apply("-inset-x-32")).toEqual({ "right": -128, "left": -128 })
});

test("-inset-x-40 namespace", () => {
  expect(apply("-inset-x-40")).toEqual({ "right": -160, "left": -160 })
});

test("-inset-x-48 namespace", () => {
  expect(apply("-inset-x-48")).toEqual({ "right": -192, "left": -192 })
});

test("-inset-x-56 namespace", () => {
  expect(apply("-inset-x-56")).toEqual({ "right": -224, "left": -224 })
});

test("-inset-x-64 namespace", () => {
  expect(apply("-inset-x-64")).toEqual({ "right": -256, "left": -256 })
});

test("-inset-x-px namespace", () => {
  expect(apply("-inset-x-px")).toEqual({ "right": -2, "left": -2 })
});

test("-top-1 namespace", () => {
  expect(apply("-top-1")).toEqual({ "top": -4 })
});

test("-top-2 namespace", () => {
  expect(apply("-top-2")).toEqual({ "top": -8 })
});

test("-top-3 namespace", () => {
  expect(apply("-top-3")).toEqual({ "top": -12 })
});

test("-top-4 namespace", () => {
  expect(apply("-top-4")).toEqual({ "top": -16 })
});

test("-top-5 namespace", () => {
  expect(apply("-top-5")).toEqual({ "top": -20 })
});

test("-top-6 namespace", () => {
  expect(apply("-top-6")).toEqual({ "top": -24 })
});

test("-top-7 namespace", () => {
  expect(apply("-top-7")).toEqual({ "top": -28 })
});

test("-top-8 namespace", () => {
  expect(apply("-top-8")).toEqual({ "top": -32 })
});

test("-top-9 namespace", () => {
  expect(apply("-top-9")).toEqual({ "top": -36 })
});

test("-top-10 namespace", () => {
  expect(apply("-top-10")).toEqual({ "top": -40 })
});

test("-top-12 namespace", () => {
  expect(apply("-top-12")).toEqual({ "top": -48 })
});

test("-top-16 namespace", () => {
  expect(apply("-top-16")).toEqual({ "top": -64 })
});

test("-top-20 namespace", () => {
  expect(apply("-top-20")).toEqual({ "top": -80 })
});

test("-top-24 namespace", () => {
  expect(apply("-top-24")).toEqual({ "top": -96 })
});

test("-top-32 namespace", () => {
  expect(apply("-top-32")).toEqual({ "top": -128 })
});

test("-top-40 namespace", () => {
  expect(apply("-top-40")).toEqual({ "top": -160 })
});

test("-top-48 namespace", () => {
  expect(apply("-top-48")).toEqual({ "top": -192 })
});

test("-top-56 namespace", () => {
  expect(apply("-top-56")).toEqual({ "top": -224 })
});

test("-top-64 namespace", () => {
  expect(apply("-top-64")).toEqual({ "top": -256 })
});

test("-top-px namespace", () => {
  expect(apply("-top-px")).toEqual({ "top": -2 })
});

test("-right-1 namespace", () => {
  expect(apply("-right-1")).toEqual({ "right": -4 })
});

test("-right-2 namespace", () => {
  expect(apply("-right-2")).toEqual({ "right": -8 })
});

test("-right-3 namespace", () => {
  expect(apply("-right-3")).toEqual({ "right": -12 })
});

test("-right-4 namespace", () => {
  expect(apply("-right-4")).toEqual({ "right": -16 })
});

test("-right-5 namespace", () => {
  expect(apply("-right-5")).toEqual({ "right": -20 })
});

test("-right-6 namespace", () => {
  expect(apply("-right-6")).toEqual({ "right": -24 })
});

test("-right-7 namespace", () => {
  expect(apply("-right-7")).toEqual({ "right": -28 })
});

test("-right-8 namespace", () => {
  expect(apply("-right-8")).toEqual({ "right": -32 })
});

test("-right-9 namespace", () => {
  expect(apply("-right-9")).toEqual({ "right": -36 })
});

test("-right-10 namespace", () => {
  expect(apply("-right-10")).toEqual({ "right": -40 })
});

test("-right-12 namespace", () => {
  expect(apply("-right-12")).toEqual({ "right": -48 })
});

test("-right-16 namespace", () => {
  expect(apply("-right-16")).toEqual({ "right": -64 })
});

test("-right-20 namespace", () => {
  expect(apply("-right-20")).toEqual({ "right": -80 })
});

test("-right-24 namespace", () => {
  expect(apply("-right-24")).toEqual({ "right": -96 })
});

test("-right-32 namespace", () => {
  expect(apply("-right-32")).toEqual({ "right": -128 })
});

test("-right-40 namespace", () => {
  expect(apply("-right-40")).toEqual({ "right": -160 })
});

test("-right-48 namespace", () => {
  expect(apply("-right-48")).toEqual({ "right": -192 })
});

test("-right-56 namespace", () => {
  expect(apply("-right-56")).toEqual({ "right": -224 })
});

test("-right-64 namespace", () => {
  expect(apply("-right-64")).toEqual({ "right": -256 })
});

test("-right-px namespace", () => {
  expect(apply("-right-px")).toEqual({ "right": -2 })
});

test("-bottom-1 namespace", () => {
  expect(apply("-bottom-1")).toEqual({ "bottom": -4 })
});

test("-bottom-2 namespace", () => {
  expect(apply("-bottom-2")).toEqual({ "bottom": -8 })
});

test("-bottom-3 namespace", () => {
  expect(apply("-bottom-3")).toEqual({ "bottom": -12 })
});

test("-bottom-4 namespace", () => {
  expect(apply("-bottom-4")).toEqual({ "bottom": -16 })
});

test("-bottom-5 namespace", () => {
  expect(apply("-bottom-5")).toEqual({ "bottom": -20 })
});

test("-bottom-6 namespace", () => {
  expect(apply("-bottom-6")).toEqual({ "bottom": -24 })
});

test("-bottom-7 namespace", () => {
  expect(apply("-bottom-7")).toEqual({ "bottom": -28 })
});

test("-bottom-8 namespace", () => {
  expect(apply("-bottom-8")).toEqual({ "bottom": -32 })
});

test("-bottom-9 namespace", () => {
  expect(apply("-bottom-9")).toEqual({ "bottom": -36 })
});

test("-bottom-10 namespace", () => {
  expect(apply("-bottom-10")).toEqual({ "bottom": -40 })
});

test("-bottom-12 namespace", () => {
  expect(apply("-bottom-12")).toEqual({ "bottom": -48 })
});

test("-bottom-16 namespace", () => {
  expect(apply("-bottom-16")).toEqual({ "bottom": -64 })
});

test("-bottom-20 namespace", () => {
  expect(apply("-bottom-20")).toEqual({ "bottom": -80 })
});

test("-bottom-24 namespace", () => {
  expect(apply("-bottom-24")).toEqual({ "bottom": -96 })
});

test("-bottom-32 namespace", () => {
  expect(apply("-bottom-32")).toEqual({ "bottom": -128 })
});

test("-bottom-40 namespace", () => {
  expect(apply("-bottom-40")).toEqual({ "bottom": -160 })
});

test("-bottom-48 namespace", () => {
  expect(apply("-bottom-48")).toEqual({ "bottom": -192 })
});

test("-bottom-56 namespace", () => {
  expect(apply("-bottom-56")).toEqual({ "bottom": -224 })
});

test("-bottom-64 namespace", () => {
  expect(apply("-bottom-64")).toEqual({ "bottom": -256 })
});

test("-bottom-px namespace", () => {
  expect(apply("-bottom-px")).toEqual({ "bottom": -2 })
});

test("-left-1 namespace", () => {
  expect(apply("-left-1")).toEqual({ "left": -4 })
});

test("-left-2 namespace", () => {
  expect(apply("-left-2")).toEqual({ "left": -8 })
});

test("-left-3 namespace", () => {
  expect(apply("-left-3")).toEqual({ "left": -12 })
});

test("-left-4 namespace", () => {
  expect(apply("-left-4")).toEqual({ "left": -16 })
});

test("-left-5 namespace", () => {
  expect(apply("-left-5")).toEqual({ "left": -20 })
});

test("-left-6 namespace", () => {
  expect(apply("-left-6")).toEqual({ "left": -24 })
});

test("-left-7 namespace", () => {
  expect(apply("-left-7")).toEqual({ "left": -28 })
});

test("-left-8 namespace", () => {
  expect(apply("-left-8")).toEqual({ "left": -32 })
});

test("-left-9 namespace", () => {
  expect(apply("-left-9")).toEqual({ "left": -36 })
});

test("-left-10 namespace", () => {
  expect(apply("-left-10")).toEqual({ "left": -40 })
});

test("-left-12 namespace", () => {
  expect(apply("-left-12")).toEqual({ "left": -48 })
});

test("-left-16 namespace", () => {
  expect(apply("-left-16")).toEqual({ "left": -64 })
});

test("-left-20 namespace", () => {
  expect(apply("-left-20")).toEqual({ "left": -80 })
});

test("-left-24 namespace", () => {
  expect(apply("-left-24")).toEqual({ "left": -96 })
});

test("-left-32 namespace", () => {
  expect(apply("-left-32")).toEqual({ "left": -128 })
});

test("-left-40 namespace", () => {
  expect(apply("-left-40")).toEqual({ "left": -160 })
});

test("-left-48 namespace", () => {
  expect(apply("-left-48")).toEqual({ "left": -192 })
});

test("-left-56 namespace", () => {
  expect(apply("-left-56")).toEqual({ "left": -224 })
});

test("-left-64 namespace", () => {
  expect(apply("-left-64")).toEqual({ "left": -256 })
});

test("-left-px namespace", () => {
  expect(apply("-left-px")).toEqual({ "left": -2 })
});
