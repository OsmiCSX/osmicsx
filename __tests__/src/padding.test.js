import apply from "../../dist/core/apply";

test("p-0 namespace", () => {
  expect(apply("p-0")).toEqual({ padding: 0 });
});

test("p-1 namespace", () => {
  expect(apply("p-1")).toEqual({ padding: 4 });
});

test("p-2 namespace", () => {
  expect(apply("p-2")).toEqual({ padding: 8 });
});

test("p-3 namespace", () => {
  expect(apply("p-3")).toEqual({ padding: 12 });
});

test("p-4 namespace", () => {
  expect(apply("p-4")).toEqual({ padding: 16 });
});

test("p-5 namespace", () => {
  expect(apply("p-5")).toEqual({ padding: 20 });
});

test("p-6 namespace", () => {
  expect(apply("p-6")).toEqual({ padding: 24 });
});

test("p-7 namespace", () => {
  expect(apply("p-7")).toEqual({ padding: 28 });
});

test("p-8 namespace", () => {
  expect(apply("p-8")).toEqual({ padding: 32 });
});

test("p-9 namespace", () => {
  expect(apply("p-9")).toEqual({ padding: 36 });
});

test("p-10 namespace", () => {
  expect(apply("p-10")).toEqual({ padding: 40 });
});

test("p-12 namespace", () => {
  expect(apply("p-12")).toEqual({ padding: 48 });
});

test("p-16 namespace", () => {
  expect(apply("p-16")).toEqual({ padding: 64 });
});

test("p-20 namespace", () => {
  expect(apply("p-20")).toEqual({ padding: 80 });
});

test("p-24 namespace", () => {
  expect(apply("p-24")).toEqual({ padding: 96 });
});

test("p-32 namespace", () => {
  expect(apply("p-32")).toEqual({ padding: 128 });
});
test("p-40 namespace", () => {
  expect(apply("p-40")).toEqual({ padding: 160 });
});
test("p-48 namespace", () => {
  expect(apply("p-48")).toEqual({ padding: 192 });
});
test("p-56 namespace", () => {
  expect(apply("p-56")).toEqual({ padding: 224 });
});
test("p-64 namespace", () => {
  expect(apply("p-64")).toEqual({ padding: 256 });
});

test("p-px namespace", () => {
  expect(apply("p-px")).toEqual({ padding: 2 });
});

test("py-0 namespace", () => {
  expect(apply("py-0")).toEqual({ paddingTop: 0, paddingBottom: 0 });
});

test("py-1 namespace", () => {
  expect(apply("py-1")).toEqual({ paddingTop: 4, paddingBottom: 4 });
});

test("py-2 namespace", () => {
  expect(apply("py-2")).toEqual({ paddingTop: 8, paddingBottom: 8 });
});

test("py-3 namespace", () => {
  expect(apply("py-3")).toEqual({ paddingTop: 12, paddingBottom: 12 });
});

test("py-4 namespace", () => {
  expect(apply("py-4")).toEqual({ paddingTop: 16, paddingBottom: 16 });
});

test("py-5 namespace", () => {
  expect(apply("py-5")).toEqual({ paddingTop: 20, paddingBottom: 20 });
});

test("py-6 namespace", () => {
  expect(apply("py-6")).toEqual({ paddingTop: 24, paddingBottom: 24 });
});

test("py-7 namespace", () => {
  expect(apply("py-7")).toEqual({ paddingTop: 28, paddingBottom: 28 });
});

test("py-8 namespace", () => {
  expect(apply("py-8")).toEqual({ paddingTop: 32, paddingBottom: 32 });
});

test("py-9 namespace", () => {
  expect(apply("py-9")).toEqual({ paddingTop: 36, paddingBottom: 36 });
});

test("py-10 namespace", () => {
  expect(apply("py-10")).toEqual({ paddingTop: 40, paddingBottom: 40 });
});

test("py-12 namespace", () => {
  expect(apply("py-12")).toEqual({ paddingTop: 48, paddingBottom: 48 });
});

test("py-16 namespace", () => {
  expect(apply("py-16")).toEqual({ paddingTop: 64, paddingBottom: 64 });
});

test("py-20 namespace", () => {
  expect(apply("py-20")).toEqual({ paddingTop: 80, paddingBottom: 80 });
});

test("py-24 namespace", () => {
  expect(apply("py-24")).toEqual({ paddingTop: 96, paddingBottom: 96 });
});

test("py-32 namespace", () => {
  expect(apply("py-32")).toEqual({ paddingTop: 128, paddingBottom: 128 });
});

test("py-40 namespace", () => {
  expect(apply("py-40")).toEqual({ paddingTop: 160, paddingBottom: 160 });
});

test("py-48 namespace", () => {
  expect(apply("py-48")).toEqual({ paddingTop: 192, paddingBottom: 192 });
});

test("py-56 namespace", () => {
  expect(apply("py-56")).toEqual({ paddingTop: 224, paddingBottom: 224 });
});

test("py-64 namespace", () => {
  expect(apply("py-64")).toEqual({ paddingTop: 256, paddingBottom: 256 });
});

test("py-px namespace", () => {
  expect(apply("py-px")).toEqual({ paddingTop: 2, paddingBottom: 2 });
});

test("px-0 namespace", () => {
  expect(apply("px-0")).toEqual({ paddingRight: 0, paddingLeft: 0 });
});

test("px-1 namespace", () => {
  expect(apply("px-1")).toEqual({ paddingRight: 4, paddingLeft: 4 });
});

test("px-2 namespace", () => {
  expect(apply("px-2")).toEqual({ paddingRight: 8, paddingLeft: 8 });
});

test("px-3 namespace", () => {
  expect(apply("px-3")).toEqual({ paddingRight: 12, paddingLeft: 12 });
});

test("px-4 namespace", () => {
  expect(apply("px-4")).toEqual({ paddingRight: 16, paddingLeft: 16 });
});

test("px-5 namespace", () => {
  expect(apply("px-5")).toEqual({ paddingRight: 20, paddingLeft: 20 });
});

test("px-6 namespace", () => {
  expect(apply("px-6")).toEqual({ paddingRight: 24, paddingLeft: 24 });
});

test("px-7 namespace", () => {
  expect(apply("px-7")).toEqual({ paddingRight: 28, paddingLeft: 28 });
});

test("px-8 namespace", () => {
  expect(apply("px-8")).toEqual({ paddingRight: 32, paddingLeft: 32 });
});

test("px-9 namespace", () => {
  expect(apply("px-9")).toEqual({ paddingRight: 36, paddingLeft: 36 });
});

test("px-10 namespace", () => {
  expect(apply("px-10")).toEqual({ paddingRight: 40, paddingLeft: 40 });
});

test("px-12 namespace", () => {
  expect(apply("px-12")).toEqual({ paddingRight: 48, paddingLeft: 48 });
});

test("px-16 namespace", () => {
  expect(apply("px-16")).toEqual({ paddingRight: 64, paddingLeft: 64 });
});

test("px-20 namespace", () => {
  expect(apply("px-20")).toEqual({ paddingRight: 80, paddingLeft: 80 });
});

test("px-24 namespace", () => {
  expect(apply("px-24")).toEqual({ paddingRight: 96, paddingLeft: 96 });
});

test("px-32 namespace", () => {
  expect(apply("px-32")).toEqual({ paddingRight: 128, paddingLeft: 128 });
});

test("px-40 namespace", () => {
  expect(apply("px-40")).toEqual({ paddingRight: 160, paddingLeft: 160 });
});

test("px-48 namespace", () => {
  expect(apply("px-48")).toEqual({ paddingRight: 192, paddingLeft: 192 });
});

test("px-56 namespace", () => {
  expect(apply("px-56")).toEqual({ paddingRight: 224, paddingLeft: 224 });
});

test("px-64 namespace", () => {
  expect(apply("px-64")).toEqual({ paddingRight: 256, paddingLeft: 256 });
});

test("px-px namespace", () => {
  expect(apply("px-px")).toEqual({ paddingRight: 2, paddingLeft: 2 });
});

test("pt-0 namespace", () => {
  expect(apply("pt-0")).toEqual({ paddingTop: 0 });
});

test("pt-1 namespace", () => {
  expect(apply("pt-1")).toEqual({ paddingTop: 4 });
});

test("pt-2 namespace", () => {
  expect(apply("pt-2")).toEqual({ paddingTop: 8 });
});

test("pt-3 namespace", () => {
  expect(apply("pt-3")).toEqual({ paddingTop: 12 });
});

test("pt-4 namespace", () => {
  expect(apply("pt-4")).toEqual({ paddingTop: 16 });
});

test("pt-5 namespace", () => {
  expect(apply("pt-5")).toEqual({ paddingTop: 20 });
});

test("pt-6 namespace", () => {
  expect(apply("pt-6")).toEqual({ paddingTop: 24 });
});

test("pt-7 namespace", () => {
  expect(apply("pt-7")).toEqual({ paddingTop: 28 });
});

test("pt-8 namespace", () => {
  expect(apply("pt-8")).toEqual({ paddingTop: 32 });
});

test("pt-9 namespace", () => {
  expect(apply("pt-9")).toEqual({ paddingTop: 36 });
});

test("pt-10 namespace", () => {
  expect(apply("pt-10")).toEqual({ paddingTop: 40 });
});

test("pt-12 namespace", () => {
  expect(apply("pt-12")).toEqual({ paddingTop: 48 });
});

test("pt-16 namespace", () => {
  expect(apply("pt-16")).toEqual({ paddingTop: 64 });
});

test("pt-20 namespace", () => {
  expect(apply("pt-20")).toEqual({ paddingTop: 80 });
});

test("pt-24 namespace", () => {
  expect(apply("pt-24")).toEqual({ paddingTop: 96 });
});

test("pt-32 namespace", () => {
  expect(apply("pt-32")).toEqual({ paddingTop: 128 });
});

test("pt-40 namespace", () => {
  expect(apply("pt-40")).toEqual({ paddingTop: 160 });
});

test("pt-48 namespace", () => {
  expect(apply("pt-48")).toEqual({ paddingTop: 192 });
});

test("pt-56 namespace", () => {
  expect(apply("pt-56")).toEqual({ paddingTop: 224 });
});

test("pt-64 namespace", () => {
  expect(apply("pt-64")).toEqual({ paddingTop: 256 });
});

test("pt-px namespace", () => {
  expect(apply("pt-px")).toEqual({ paddingTop: 2 });
});

test("pr-0 namespace", () => {
  expect(apply("pr-0")).toEqual({ paddingRight: 0 });
});

test("pr-1 namespace", () => {
  expect(apply("pr-1")).toEqual({ paddingRight: 4 });
});

test("pr-2 namespace", () => {
  expect(apply("pr-2")).toEqual({ paddingRight: 8 });
});

test("pr-3 namespace", () => {
  expect(apply("pr-3")).toEqual({ paddingRight: 12 });
});

test("pr-4 namespace", () => {
  expect(apply("pr-4")).toEqual({ paddingRight: 16 });
});

test("pr-5 namespace", () => {
  expect(apply("pr-5")).toEqual({ paddingRight: 20 });
});

test("pr-6 namespace", () => {
  expect(apply("pr-6")).toEqual({ paddingRight: 24 });
});

test("pr-7 namespace", () => {
  expect(apply("pr-7")).toEqual({ paddingRight: 28 });
});

test("pr-8 namespace", () => {
  expect(apply("pr-8")).toEqual({ paddingRight: 32 });
});

test("pr-9 namespace", () => {
  expect(apply("pr-9")).toEqual({ paddingRight: 36 });
});

test("pr-10 namespace", () => {
  expect(apply("pr-10")).toEqual({ paddingRight: 40 });
});

test("pr-12 namespace", () => {
  expect(apply("pr-12")).toEqual({ paddingRight: 48 });
});

test("pr-16 namespace", () => {
  expect(apply("pr-16")).toEqual({ paddingRight: 64 });
});

test("pr-20 namespace", () => {
  expect(apply("pr-20")).toEqual({ paddingRight: 80 });
});

test("pr-24 namespace", () => {
  expect(apply("pr-24")).toEqual({ paddingRight: 96 });
});

test("pr-32 namespace", () => {
  expect(apply("pr-32")).toEqual({ paddingRight: 128 });
});

test("pr-40 namespace", () => {
  expect(apply("pr-40")).toEqual({ paddingRight: 160 });
});

test("pr-48 namespace", () => {
  expect(apply("pr-48")).toEqual({ paddingRight: 192 });
});

test("pr-56 namespace", () => {
  expect(apply("pr-56")).toEqual({ paddingRight: 224 });
});

test("pr-64 namespace", () => {
  expect(apply("pr-64")).toEqual({ paddingRight: 256 });
});

test("pr-px namespace", () => {
  expect(apply("pr-px")).toEqual({ paddingRight: 2 });
});

test("pb-0 namespace", () => {
  expect(apply("pb-0")).toEqual({ paddingBottom: 0 });
});
test("pb-1 namespace", () => {
  expect(apply("pb-1")).toEqual({ paddingBottom: 4 });
});
test("pb-2 namespace", () => {
  expect(apply("pb-2")).toEqual({ paddingBottom: 8 });
});
test("pb-3 namespace", () => {
  expect(apply("pb-3")).toEqual({ paddingBottom: 12 });
});
test("pb-4 namespace", () => {
  expect(apply("pb-4")).toEqual({ paddingBottom: 16 });
});
test("pb-5 namespace", () => {
  expect(apply("pb-5")).toEqual({ paddingBottom: 20 });
});
test("pb-6 namespace", () => {
  expect(apply("pb-6")).toEqual({ paddingBottom: 24 });
});
test("pb-7 namespace", () => {
  expect(apply("pb-7")).toEqual({ paddingBottom: 28 });
});
test("pb-8 namespace", () => {
  expect(apply("pb-8")).toEqual({ paddingBottom: 32 });
});
test("pb-9 namespace", () => {
  expect(apply("pb-9")).toEqual({ paddingBottom: 36 });
});

test("pb-10 namespace", () => {
  expect(apply("pb-10")).toEqual({ paddingBottom: 40 });
});

test("pb-12 namespace", () => {
  expect(apply("pb-12")).toEqual({ paddingBottom: 48 });
});

test("pb-16 namespace", () => {
  expect(apply("pb-16")).toEqual({ paddingBottom: 64 });
});

test("pb-20 namespace", () => {
  expect(apply("pb-20")).toEqual({ paddingBottom: 80 });
});

test("pb-24 namespace", () => {
  expect(apply("pb-24")).toEqual({ paddingBottom: 96 });
});

test("pb-32 namespace", () => {
  expect(apply("pb-32")).toEqual({ paddingBottom: 128 });
});

test("pb-40 namespace", () => {
  expect(apply("pb-40")).toEqual({ paddingBottom: 160 });
});

test("pb-48 namespace", () => {
  expect(apply("pb-48")).toEqual({ paddingBottom: 192 });
});

test("pb-56 namespace", () => {
  expect(apply("pb-56")).toEqual({ paddingBottom: 224 });
});

test("pb-64 namespace", () => {
  expect(apply("pb-64")).toEqual({ paddingBottom: 256 });
});

test("pb-px namespace", () => {
  expect(apply("pb-px")).toEqual({ paddingBottom: 2 });
});

test("pl-0 namespace", () => {
  expect(apply("pl-0")).toEqual({ paddingLeft: 0 });
});

test("pl-1 namespace", () => {
  expect(apply("pl-1")).toEqual({ paddingLeft: 4 });
});

test("pl-2 namespace", () => {
  expect(apply("pl-2")).toEqual({ paddingLeft: 8 });
});

test("pl-3 namespace", () => {
  expect(apply("pl-3")).toEqual({ paddingLeft: 12 });
});

test("pl-4 namespace", () => {
  expect(apply("pl-4")).toEqual({ paddingLeft: 16 });
});

test("pl-5 namespace", () => {
  expect(apply("pl-5")).toEqual({ paddingLeft: 20 });
});

test("pl-6 namespace", () => {
  expect(apply("pl-6")).toEqual({ paddingLeft: 24 });
});

test("pl-7 namespace", () => {
  expect(apply("pl-7")).toEqual({ paddingLeft: 28 });
});

test("pl-8 namespace", () => {
  expect(apply("pl-8")).toEqual({ paddingLeft: 32 });
});

test("pl-9 namespace", () => {
  expect(apply("pl-9")).toEqual({ paddingLeft: 36 });
});

test("pl-10 namespace", () => {
  expect(apply("pl-10")).toEqual({ paddingLeft: 40 });
});

test("pl-12 namespace", () => {
  expect(apply("pl-12")).toEqual({ paddingLeft: 48 });
});

test("pl-16 namespace", () => {
  expect(apply("pl-16")).toEqual({ paddingLeft: 64 });
});

test("pl-20 namespace", () => {
  expect(apply("pl-20")).toEqual({ paddingLeft: 80 });
});

test("pl-24 namespace", () => {
  expect(apply("pl-24")).toEqual({ paddingLeft: 96 });
});

test("pl-32 namespace", () => {
  expect(apply("pl-32")).toEqual({ paddingLeft: 128 });
});

test("pl-40 namespace", () => {
  expect(apply("pl-40")).toEqual({ paddingLeft: 160 });
});

test("pl-48 namespace", () => {
  expect(apply("pl-48")).toEqual({ paddingLeft: 192 });
});

test("pl-56 namespace", () => {
  expect(apply("pl-56")).toEqual({ paddingLeft: 224 });
});

test("pl-64 namespace", () => {
  expect(apply("pl-64")).toEqual({ paddingLeft: 256 });
});

test("pl-px namespace", () => {
  expect(apply("pl-px")).toEqual({ paddingLeft: 2 });
});
