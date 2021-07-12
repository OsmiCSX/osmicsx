import apply from '../../dist/core/apply';

test('m-0 namespace', () => {
  expect(apply("m-0")).toEqual({ margin: 0 })
})

test('m-1 namespace', () => {
  expect(apply("m-1")).toEqual({ margin: 4 })
})

test('m-2 namespace', () => {
  expect(apply("m-2")).toEqual({ margin: 8 })
})

test('m-3 namespace', () => {
  expect(apply("m-3")).toEqual({ margin: 12 })
})

test('m-4 namespace', () => {
  expect(apply("m-4")).toEqual({ margin: 16 })
})

test('m-5 namespace', () => {
  expect(apply("m-5")).toEqual({ margin: 20 })
})

test('m-6 namespace', () => {
  expect(apply("m-6")).toEqual({ margin: 24 })
})

test('m-7 namespace', () => {
  expect(apply("m-7")).toEqual({ margin: 28 })
})

test('m-8 namespace', () => {
  expect(apply("m-8")).toEqual({ margin: 32 })
})

test('m-9 namespace', () => {
  expect(apply("m-9")).toEqual({ margin: 36 })
})

test('m-10 namespace', () => {
  expect(apply("m-10")).toEqual({ margin: 40 })
})

test('m-12 namespace', () => {
  expect(apply("m-12")).toEqual({ margin: 48 })
})

test('m-16 namespace', () => {
  expect(apply("m-16")).toEqual({ margin: 64 })
})

test('m-20 namespace', () => {
  expect(apply("m-20")).toEqual({ margin: 80 })
})

test('m-24 namespace', () => {
  expect(apply("m-24")).toEqual({ margin: 96 })
})

test('m-32 namespace', () => {
  expect(apply("m-32")).toEqual({ margin: 128 })
})

test('m-40 namespace', () => {
  expect(apply("m-40")).toEqual({ margin: 160 })
})

test('m-48 namespace', () => {
  expect(apply("m-48")).toEqual({ margin: 192 })
})

test('m-56 namespace', () => {
  expect(apply("m-56")).toEqual({ margin: 224 })
})

test('m-64 namespace', () => {
  expect(apply("m-64")).toEqual({ margin: 256 })
})

test('m-px namespace', () => {
  expect(apply("m-px")).toEqual({ margin: 2 })
})

test('my-0 namespace', () => {
  expect(apply("my-0")).toEqual({ marginTop: 0, marginBottom: 0 })
})

test('my-1 namespace', () => {
  expect(apply("my-1")).toEqual({ marginTop: 4 , marginBottom: 4 })
})

test('my-3 namespace', () => {
  expect(apply("my-2")).toEqual({ marginTop: 8 , marginBottom: 8 })
})

test('m- namespace', () => {
  expect(apply("my-3")).toEqual({ marginTop: 12, marginBottom: 12 })
})

test('my-4 namespace', () => {
  expect(apply("my-4")).toEqual({ marginTop: 16, marginBottom: 16 })
})

test('my-5 namespace', () => {
  expect(apply("my-5")).toEqual({ marginTop: 20, marginBottom: 20 })
})

test('my-6 namespace', () => {
  expect(apply("my-6")).toEqual({ marginTop: 24, marginBottom: 24 })
})

test('my-7 namespace', () => {
  expect(apply("my-7")).toEqual({ marginTop: 28, marginBottom: 28 })
})

test('my-8 namespace', () => {
  expect(apply("my-8")).toEqual({ marginTop: 32, marginBottom: 32 })
})

test('my-9 namespace', () => {
  expect(apply("my-9")).toEqual({ marginTop: 36, marginBottom: 36 })
})

test('my-10 namespace', () => {
  expect(apply("my-10")).toEqual({ marginTop: 40, marginBottom: 40 })
})

test('my-12 namespace', () => {
  expect(apply("my-12")).toEqual({ marginTop: 48, marginBottom: 48 })
})

test('my-16 namespace', () => {
  expect(apply("my-16")).toEqual({ marginTop: 64, marginBottom: 64 })
})

test('my-20 namespace', () => {
  expect(apply("my-20")).toEqual({ marginTop: 80, marginBottom: 80 })
})

test('my-24 namespace', () => {
  expect(apply("my-24")).toEqual({ marginTop: 96, marginBottom: 96 })
})

test('my-32 namespace', () => {
  expect(apply("my-32")).toEqual({ marginTop: 128, marginBottom: 128 })
})

test('my-40 namespace', () => {
  expect(apply("my-40")).toEqual({ marginTop: 160, marginBottom: 160 })
})

test('my-48 namespace', () => {
  expect(apply("my-48")).toEqual({ marginTop: 192, marginBottom: 192 })
})

test('my-56 namespace', () => {
  expect(apply("my-56")).toEqual({ marginTop: 224, marginBottom: 224 })
})

test('my-64 namespace', () => {
  expect(apply("my-64")).toEqual({ marginTop: 256, marginBottom: 256 })
})

test('my-px namespace', () => {
  expect(apply("my-px")).toEqual({ marginTop: 2, marginBottom: 2})
})

test('mx-0 namespace', () => {
  expect(apply("mx-0")).toEqual({ marginRight: 0, marginLeft: 0 })
})

test('mx-1 namespace', () => {
  expect(apply("mx-1")).toEqual({ marginRight: 4 , marginLeft: 4 })
})

test('mx-2 namespace', () => {
  expect(apply("mx-2")).toEqual({ marginRight: 8 , marginLeft: 8 })
})

test('mx-3 namespace', () => {
  expect(apply("mx-3")).toEqual({ marginRight: 12, marginLeft: 12 })
})

test('mx-4 namespace', () => {
  expect(apply("mx-4")).toEqual({ marginRight: 16, marginLeft: 16 })
})

test('mx-5 namespace', () => {
  expect(apply("mx-5")).toEqual({ marginRight: 20, marginLeft: 20 })
})

test('mx-6 namespace', () => {
  expect(apply("mx-6")).toEqual({ marginRight: 24, marginLeft: 24 })
})

test('mx-7 namespace', () => {
  expect(apply("mx-7")).toEqual({ marginRight: 28, marginLeft: 28 })
})

test('mx-8 namespace', () => {
  expect(apply("mx-8")).toEqual({ marginRight: 32, marginLeft: 32 })
})

test('mx-9 namespace', () => {
  expect(apply("mx-9")).toEqual({ marginRight: 36, marginLeft: 36 })
})

test('mx-10 namespace', () => {
  expect(apply("mx-10")).toEqual({ marginRight: 40, marginLeft: 40 })
})

test('mx-12 namespace', () => {
  expect(apply("mx-12")).toEqual({ marginRight: 48, marginLeft: 48 })
})

test('mx-16 namespace', () => {
  expect(apply("mx-16")).toEqual({ marginRight: 64, marginLeft: 64 })
})

test('mx-20 namespace', () => {
  expect(apply("mx-20")).toEqual({ marginRight: 80, marginLeft: 80 })
})

test('mx-24 namespace', () => {
  expect(apply("mx-24")).toEqual({ marginRight: 96, marginLeft: 96 })
})

test('mx-32 namespace', () => {
  expect(apply("mx-32")).toEqual({ marginRight: 128, marginLeft: 128 })
})

test('mx-40 namespace', () => {
  expect(apply("mx-40")).toEqual({ marginRight: 160, marginLeft: 160 })
})

test('mx-48 namespace', () => {
  expect(apply("mx-48")).toEqual({ marginRight: 192, marginLeft: 192 })
})

test('mx-56 namespace', () => {
  expect(apply("mx-56")).toEqual({ marginRight: 224, marginLeft: 224 })
})

test('mx-64 namespace', () => {
  expect(apply("mx-64")).toEqual({ marginRight: 256, marginLeft: 256 })
})

test('mx-px namespace', () => {
  expect(apply("mx-px")).toEqual({ marginRight: 2, marginLeft: 2 })
})

test('mt-0 namespace', () => {
  expect(apply("mt-0")).toEqual({ marginTop: 0 })
})

test('mt-1 namespace', () => {
  expect(apply("mt-1")).toEqual({ marginTop: 4 })
})

test('mt-2 namespace', () => {
  expect(apply("mt-2")).toEqual({ marginTop: 8 })
})

test('mt-3 namespace', () => {
  expect(apply("mt-3")).toEqual({ marginTop: 12 })
})

test('mt-4 namespace', () => {
  expect(apply("mt-4")).toEqual({ marginTop: 16 })
})

test('mt-5 namespace', () => {
  expect(apply("mt-5")).toEqual({ marginTop: 20 })
})

test('mt-6 namespace', () => {
  expect(apply("mt-6")).toEqual({ marginTop: 24 })
})

test('mt-7 namespace', () => {
  expect(apply("mt-7")).toEqual({ marginTop: 28 })
})

test('mt-8 namespace', () => {
  expect(apply("mt-8")).toEqual({ marginTop: 32 })
})

test('mt-9 namespace', () => {
  expect(apply("mt-9")).toEqual({ marginTop: 36 })
})

test('mt-10 namespace', () => {
  expect(apply("mt-10")).toEqual({ marginTop: 40 })
})

test('mt-12 namespace', () => {
  expect(apply("mt-12")).toEqual({ marginTop: 48 })
})

test('mt-16 namespace', () => {
  expect(apply("mt-16")).toEqual({ marginTop: 64 })
})

test('mt-20 namespace', () => {
  expect(apply("mt-20")).toEqual({ marginTop: 80 })
})

test('mt-24 namespace', () => {
  expect(apply("mt-24")).toEqual({ marginTop: 96 })
})

test('mt-32 namespace', () => {
  expect(apply("mt-32")).toEqual({ marginTop: 128 })
})

test('mt-40 namespace', () => {
  expect(apply("mt-40")).toEqual({ marginTop: 160 })
})

test('mt-48 namespace', () => {
  expect(apply("mt-48")).toEqual({ marginTop: 192 })
})

test('mt-56 namespace', () => {
  expect(apply("mt-56")).toEqual({ marginTop: 224 })
})

test('mt-64 namespace', () => {
  expect(apply("mt-64")).toEqual({ marginTop: 256 })
})

test('mt-px namespace', () => {
  expect(apply("mt-px")).toEqual({ marginTop: 2 })
})

test('mr-0 namespace', () => {
  expect(apply("mr-0")).toEqual({ marginRight: 0 })
})

test('mr-1 namespace', () => {
  expect(apply("mr-1")).toEqual({ marginRight: 4 })
})

test('mr-2 namespace', () => {
  expect(apply("mr-2")).toEqual({ marginRight: 8 })
})

test('mr-3 namespace', () => {
  expect(apply("mr-3")).toEqual({ marginRight: 12 })
})

test('mr-4 namespace', () => {
  expect(apply("mr-4")).toEqual({ marginRight: 16 })
})

test('mr-5 namespace', () => {
  expect(apply("mr-5")).toEqual({ marginRight: 20 })
})

test('mr-6 namespace', () => {
  expect(apply("mr-6")).toEqual({ marginRight: 24 })
})

test('mr-7 namespace', () => {
  expect(apply("mr-7")).toEqual({ marginRight: 28 })
})

test('mr-8 namespace', () => {
  expect(apply("mr-8")).toEqual({ marginRight: 32 })
})

test('mr-9 namespace', () => {
  expect(apply("mr-9")).toEqual({ marginRight: 36 })
})

test('mr-10 namespace', () => {
  expect(apply("mr-10")).toEqual({ marginRight: 40 })
})

test('mr-12 namespace', () => {
  expect(apply("mr-12")).toEqual({ marginRight: 48 })
})

test('mr-16 namespace', () => {
  expect(apply("mr-16")).toEqual({ marginRight: 64 })
})

test('mr-20 namespace', () => {
  expect(apply("mr-20")).toEqual({ marginRight: 80 })
})

test('mr-24 namespace', () => {
  expect(apply("mr-24")).toEqual({ marginRight: 96 })
})

test('mr-32 namespace', () => {
  expect(apply("mr-32")).toEqual({ marginRight: 128 })
})

test('mr-40 namespace', () => {
  expect(apply("mr-40")).toEqual({ marginRight: 160 })
})

test('mr-48 namespace', () => {
  expect(apply("mr-48")).toEqual({ marginRight: 192 })
})

test('mr-56 namespace', () => {
  expect(apply("mr-56")).toEqual({ marginRight: 224 })
})

test('mr-64 namespace', () => {
  expect(apply("mr-64")).toEqual({ marginRight: 256 })
})

test('mr-px namespace', () => {
  expect(apply("mr-px")).toEqual({ marginRight: 2 })
})

test('mb-0 namespace', () => {
  expect(apply("mb-0")).toEqual({ marginBottom: 0 })
})

test('mb-1 namespace', () => {
  expect(apply("mb-1")).toEqual({ marginBottom: 4 })
})

test('mb-2 namespace', () => {
  expect(apply("mb-2")).toEqual({ marginBottom: 8 })
})

test('mb-3 namespace', () => {
  expect(apply("mb-3")).toEqual({ marginBottom: 12 })
})

test('mb-4 namespace', () => {
  expect(apply("mb-4")).toEqual({ marginBottom: 16 })
})

test('mb-5 namespace', () => {
  expect(apply("mb-5")).toEqual({ marginBottom: 20 })
})

test('mb-6 namespace', () => {
  expect(apply("mb-6")).toEqual({ marginBottom: 24 })
})

test('mb-7 namespace', () => {
  expect(apply("mb-7")).toEqual({ marginBottom: 28 })
})

test('mb-8 namespace', () => {
  expect(apply("mb-8")).toEqual({ marginBottom: 32 })
})

test('mb-9 namespace', () => {
  expect(apply("mb-9")).toEqual({ marginBottom: 36 })
})

test('mb-10 namespace', () => {
  expect(apply("mb-10")).toEqual({ marginBottom: 40 })
})

test('mb-12 namespace', () => {
  expect(apply("mb-12")).toEqual({ marginBottom: 48 })
})

test('mb-16 namespace', () => {
  expect(apply("mb-16")).toEqual({ marginBottom: 64 })
})

test('mb-20 namespace', () => {
  expect(apply("mb-20")).toEqual({ marginBottom: 80 })
})

test('mb-24 namespace', () => {
  expect(apply("mb-24")).toEqual({ marginBottom: 96 })
})

test('mb-32 namespace', () => {
  expect(apply("mb-32")).toEqual({ marginBottom: 128 })
})

test('mb-40 namespace', () => {
  expect(apply("mb-40")).toEqual({ marginBottom: 160 })
})

test('mb-48 namespace', () => {
  expect(apply("mb-48")).toEqual({ marginBottom: 192 })
})

test('mb-56 namespace', () => {
  expect(apply("mb-56")).toEqual({ marginBottom: 224 })
})

test('mb-64 namespace', () => {
  expect(apply("mb-64")).toEqual({ marginBottom: 256 })
})

test('mb-px namespace', () => {
  expect(apply("mb-px")).toEqual({ marginBottom: 2 })
})

test('ml-0 namespace', () => {
  expect(apply("ml-0")).toEqual({ marginLeft: 0 })
})

test('ml-1 namespace', () => {
  expect(apply("ml-1")).toEqual({ marginLeft: 4 })
})

test('ml-2 namespace', () => {
  expect(apply("ml-2")).toEqual({ marginLeft: 8 })
})

test('ml-3 namespace', () => {
  expect(apply("ml-3")).toEqual({ marginLeft: 12 })
})

test('ml-4 namespace', () => {
  expect(apply("ml-4")).toEqual({ marginLeft: 16 })
})

test('ml-5 namespace', () => {
  expect(apply("ml-5")).toEqual({ marginLeft: 20 })
})

test('ml-6 namespace', () => {
  expect(apply("ml-6")).toEqual({ marginLeft: 24 })
})

test('ml-7 namespace', () => {
  expect(apply("ml-7")).toEqual({ marginLeft: 28 })
})

test('ml-8 namespace', () => {
  expect(apply("ml-8")).toEqual({ marginLeft: 32 })
})

test('ml-9 namespace', () => {
  expect(apply("ml-9")).toEqual({ marginLeft: 36 })
})

test('ml-10 namespace', () => {
  expect(apply("ml-10")).toEqual({ marginLeft: 40 })
})

test('ml-12 namespace', () => {
  expect(apply("ml-12")).toEqual({ marginLeft: 48 })
})

test('ml-16 namespace', () => {
  expect(apply("ml-16")).toEqual({ marginLeft: 64 })
})

test('ml-20 namespace', () => {
  expect(apply("ml-20")).toEqual({ marginLeft: 80 })
})

test('ml-24 namespace', () => {
  expect(apply("ml-24")).toEqual({ marginLeft: 96 })
})

test('ml-32 namespace', () => {
  expect(apply("ml-32")).toEqual({ marginLeft: 128 })
})

test('ml-40 namespace', () => {
  expect(apply("ml-40")).toEqual({ marginLeft: 160 })
})

test('ml-48 namespace', () => {
  expect(apply("ml-48")).toEqual({ marginLeft: 192 })
})

test('ml-56 namespace', () => {
  expect(apply("ml-56")).toEqual({ marginLeft: 224 })
})

test('ml-64 namespace', () => {
  expect(apply("ml-64")).toEqual({ marginLeft: 256 })
})

test('ml-px namespace', () => {
  expect(apply("ml-px")).toEqual({ marginLeft: 2 })
})

test('m-auto namespace', () => {
  expect(apply("m-auto")).toEqual({ margin: "auto" })
})

test('my-auto namespace', () => {
  expect(apply("my-auto")).toEqual({ marginTop: "auto", marginBottom: "auto" })
})

test('mx-auto namespace', () => {
  expect(apply("mx-auto")).toEqual({ marginTop: "auto", marginBottom: "auto" })
})

test('mt-auto namespace', () => {
  expect(apply("mt-auto")).toEqual({ marginTop: "auto" })
})

test('mr-auto namespace', () => {
  expect(apply("mr-auto")).toEqual({ marginRight: "auto" })
})

test('mb-auto namespace', () => {
  expect(apply("mb-auto")).toEqual({ marginBottom: "auto" })
})

test('ml-auto namespace', () => {
  expect(apply("ml-auto")).toEqual({ marginLeft: "auto" })
})

test('-m-1 namespace', () => {
  expect(apply("-m-1")).toEqual({ margin: -4 })
})

test('-m-2 namespace', () => {
  expect(apply("-m-2")).toEqual({ margin: -8 })
})

test('-m-3 namespace', () => {
  expect(apply("-m-3")).toEqual({ margin: -12 })
})

test('-m-4 namespace', () => {
  expect(apply("-m-4")).toEqual({ margin: -16 })
})

test('-m-5 namespace', () => {
  expect(apply("-m-5")).toEqual({ margin: -20 })
})

test('-m-6 namespace', () => {
  expect(apply("-m-6")).toEqual({ margin: -24 })
})

test('-m-7 namespace', () => {
  expect(apply("-m-7")).toEqual({ margin: -28 })
})

test('-m-8 namespace', () => {
  expect(apply("-m-8")).toEqual({ margin: -32 })
})

test('-m-9 namespace', () => {
  expect(apply("-m-9")).toEqual({ margin: -36 })
})

test('-m-10 namespace', () => {
  expect(apply("-m-10")).toEqual({ margin: -40 })
})

test('-m-12 namespace', () => {
  expect(apply("-m-12")).toEqual({ margin: -48 })
})

test('-m-16 namespace', () => {
  expect(apply("-m-16")).toEqual({ margin: -64 })
})

test('-m-20 namespace', () => {
  expect(apply("-m-20")).toEqual({ margin: -80 })
})

test('-m-24 namespace', () => {
  expect(apply("-m-24")).toEqual({ margin: -96 })
})

test('-m-32 namespace', () => {
  expect(apply("-m-32")).toEqual({ margin: -128 })
})

test('-m-40 namespace', () => {
  expect(apply("-m-40")).toEqual({ margin: -160 })
})

test('-m-48 namespace', () => {
  expect(apply("-m-48")).toEqual({ margin: -192 })
})

test('-m-56 namespace', () => {
  expect(apply("-m-56")).toEqual({ margin: -224 })
})

test('-m-64 namespace', () => {
  expect(apply("-m-64")).toEqual({ margin: -256 })
})

test('-m-px namespace', () => {
  expect(apply("-m-px")).toEqual({ margin: -2 })
})

test('-my-1 namespace', () => {
  expect(apply("-my-1")).toEqual({ marginTop: -4 , marginBottom: -4 })
})

test('-my-2 namespace', () => {
  expect(apply("-my-2")).toEqual({ marginTop: -8 , marginBottom: -8 })
})

test('-my-3 namespace', () => {
  expect(apply("-my-3")).toEqual({ marginTop: -12, marginBottom: -12 })
})

test('-my-4 namespace', () => {
  expect(apply("-my-4")).toEqual({ marginTop: -16, marginBottom: -16 })
})

test('-my-5 namespace', () => {
  expect(apply("-my-5")).toEqual({ marginTop: -20, marginBottom: -20 })
})

test('-my-6 namespace', () => {
  expect(apply("-my-6")).toEqual({ marginTop: -24, marginBottom: -24 })
})

test('-my-7 namespace', () => {
  expect(apply("-my-7")).toEqual({ marginTop: -28, marginBottom: -28 })
})

test('-my-8 namespace', () => {
  expect(apply("-my-8")).toEqual({ marginTop: -32, marginBottom: -32 })
})

test('-my-9 namespace', () => {
  expect(apply("-my-9")).toEqual({ marginTop: -36, marginBottom: -36 })
})

test('-my-10 namespace', () => {
  expect(apply("-my-10")).toEqual({ marginTop: -40, marginBottom: -40 })
})

test('-my-12 namespace', () => {
  expect(apply("-my-12")).toEqual({ marginTop: -48, marginBottom: -48 })
})

test('-my-16 namespace', () => {
  expect(apply("-my-16")).toEqual({ marginTop: -64, marginBottom: -64 })
})

test('-my-20 namespace', () => {
  expect(apply("-my-20")).toEqual({ marginTop: -80, marginBottom: -80 })
})

test('-my-24 namespace', () => {
  expect(apply("-my-24")).toEqual({ marginTop: -96, marginBottom: -96 })
})

test('-my-32 namespace', () => {
  expect(apply("-my-32")).toEqual({ marginTop: -128, marginBottom: -128 })
})

test('-my-40 namespace', () => {
  expect(apply("-my-40")).toEqual({ marginTop: -160, marginBottom: -160 })
})

test('-my-48 namespace', () => {
  expect(apply("-my-48")).toEqual({ marginTop: -192, marginBottom: -192 })
})

test('-my-56 namespace', () => {
  expect(apply("-my-56")).toEqual({ marginTop: -224, marginBottom: -224 })
})

test('-my-64 namespace', () => {
  expect(apply("-my-64")).toEqual({ marginTop: -256, marginBottom: -256 })
})

test('-my-px namespace', () => {
  expect(apply("-my-px")).toEqual({ marginTop: -2, marginBottom: -2})
})

test('-mx-1 namespace', () => {
  expect(apply("-mx-1")).toEqual({ marginRight: -4 , marginLeft: -4 })
})

test('-mx-2 namespace', () => {
  expect(apply("-mx-2")).toEqual({ marginRight: -8 , marginLeft: -8 })
})

test('-mx-3 namespace', () => {
  expect(apply("-mx-3")).toEqual({ marginRight: -12, marginLeft: -12 })
})

test('-mx-4 namespace', () => {
  expect(apply("-mx-4")).toEqual({ marginRight: -16, marginLeft: -16 })
})

test('-mx-5 namespace', () => {
  expect(apply("-mx-5")).toEqual({ marginRight: -20, marginLeft: -20 })
})

test('-mx-6 namespace', () => {
  expect(apply("-mx-6")).toEqual({ marginRight: -24, marginLeft: -24 })
})

test('-mx-7 namespace', () => {
  expect(apply("-mx-7")).toEqual({ marginRight: -28, marginLeft: -28 })
})

test('-mx-8 namespace', () => {
  expect(apply("-mx-8")).toEqual({ marginRight: -32, marginLeft: -32 })
})

test('-mx-9 namespace', () => {
  expect(apply("-mx-9")).toEqual({ marginRight: -36, marginLeft: -36 })
})

test('-mx-10 namespace', () => {
  expect(apply("-mx-10")).toEqual({ marginRight: -40, marginLeft: -40 })
})

test('-mx-12 namespace', () => {
  expect(apply("-mx-12")).toEqual({ marginRight: -48, marginLeft: -48 })
})

test('-mx-16 namespace', () => {
  expect(apply("-mx-16")).toEqual({ marginRight: -64, marginLeft: -64 })
})

test('-mx-20 namespace', () => {
  expect(apply("-mx-20")).toEqual({ marginRight: -80, marginLeft: -80 })
})

test('-mx-24 namespace', () => {
  expect(apply("-mx-24")).toEqual({ marginRight: -96, marginLeft: -96 })
})

test('-mx-32 namespace', () => {
  expect(apply("-mx-32")).toEqual({ marginRight: -128, marginLeft: -128 })
})

test('-mx-40 namespace', () => {
  expect(apply("-mx-40")).toEqual({ marginRight: -160, marginLeft: -160 })
})

test('-mx-48 namespace', () => {
  expect(apply("-mx-48")).toEqual({ marginRight: -192, marginLeft: -192 })
})

test('-mx-56 namespace', () => {
  expect(apply("-mx-56")).toEqual({ marginRight: -224, marginLeft: -224 })
})

test('-mx-64 namespace', () => {
  expect(apply("-mx-64")).toEqual({ marginRight: -256, marginLeft: -256 })
})

test('-mx-px namespace', () => {
  expect(apply("-mx-px")).toEqual({ marginRight: -2, marginLeft: -2 })
})

test('-mt-1 namespace', () => {
  expect(apply("-mt-1")).toEqual({ marginTop: -4 })
})

test('-mt-2 namespace', () => {
  expect(apply("-mt-2")).toEqual({ marginTop: -8 })
})

test('-mt-3 namespace', () => {
  expect(apply("-mt-3")).toEqual({ marginTop: -12 })
})

test('-mt-4 namespace', () => {
  expect(apply("-mt-4")).toEqual({ marginTop: -16 })
})

test('-mt-5 namespace', () => {
  expect(apply("-mt-5")).toEqual({ marginTop: -20 })
})

test('-mt-6 namespace', () => {
  expect(apply("-mt-6")).toEqual({ marginTop: -24 })
})

test('-mt-7 namespace', () => {
  expect(apply("-mt-7")).toEqual({ marginTop: -28 })
})

test('-mt-8 namespace', () => {
  expect(apply("-mt-8")).toEqual({ marginTop: -32 })
})

test('-mt-9 namespace', () => {
  expect(apply("-mt-9")).toEqual({ marginTop: -36 })
})

test('-mt-10 namespace', () => {
  expect(apply("-mt-10")).toEqual({ marginTop: -40 })
})

test('-mt-12 namespace', () => {
  expect(apply("-mt-12")).toEqual({ marginTop: -48 })
})

test('-mt-16 namespace', () => {
  expect(apply("-mt-16")).toEqual({ marginTop: -64 })
})

test('-mt-20 namespace', () => {
  expect(apply("-mt-20")).toEqual({ marginTop: -80 })
})

test('-mt-24 namespace', () => {
  expect(apply("-mt-24")).toEqual({ marginTop: -96 })
})

test('-mt-32 namespace', () => {
  expect(apply("-mt-32")).toEqual({ marginTop: -128 })
})

test('-mt-40 namespace', () => {
  expect(apply("-mt-40")).toEqual({ marginTop: -160 })
})

test('-mt-48 namespace', () => {
  expect(apply("-mt-48")).toEqual({ marginTop: -192 })
})

test('-mt-56 namespace', () => {
  expect(apply("-mt-56")).toEqual({ marginTop: -224 })
})

test('-mt-64 namespace', () => {
  expect(apply("-mt-64")).toEqual({ marginTop: -256 })
})

test('-mt-px namespace', () => {
  expect(apply("-mt-px")).toEqual({ marginTop: -2 })
})

test('-mr-1 namespace', () => {
  expect(apply("-mr-1")).toEqual({ marginRight: -4 })
})

test('-mr-2 namespace', () => {
  expect(apply("-mr-2")).toEqual({ marginRight: -8 })
})

test('-mr-3 namespace', () => {
  expect(apply("-mr-3")).toEqual({ marginRight: -12 })
})

test('-mr-4 namespace', () => {
  expect(apply("-mr-4")).toEqual({ marginRight: -16 })
})

test('-mr-5 namespace', () => {
  expect(apply("-mr-5")).toEqual({ marginRight: -20 })
})

test('-mr-6 namespace', () => {
  expect(apply("-mr-6")).toEqual({ marginRight: -24 })
})

test('-mr-7 namespace', () => {
  expect(apply("-mr-7")).toEqual({ marginRight: -28 })
})

test('-mr-8 namespace', () => {
  expect(apply("-mr-8")).toEqual({ marginRight: -32 })
})

test('-mr-9 namespace', () => {
  expect(apply("-mr-9")).toEqual({ marginRight: -36 })
})

test('-mr-10 namespace', () => {
  expect(apply("-mr-10")).toEqual({ marginRight: -40 })
})

test('-mr-12 namespace', () => {
  expect(apply("-mr-12")).toEqual({ marginRight: -48 })
})

test('-mr-16 namespace', () => {
  expect(apply("-mr-16")).toEqual({ marginRight: -64 })
})

test('-mr-20 namespace', () => {
  expect(apply("-mr-20")).toEqual({ marginRight: -80 })
})

test('-mr-24 namespace', () => {
  expect(apply("-mr-24")).toEqual({ marginRight: -96 })
})

test('-mr-32 namespace', () => {
  expect(apply("-mr-32")).toEqual({ marginRight: -128 })
})

test('-mr-40 namespace', () => {
  expect(apply("-mr-40")).toEqual({ marginRight: -160 })
})

test('-mr-48 namespace', () => {
  expect(apply("-mr-48")).toEqual({ marginRight: -192 })
})

test('-mr-56 namespace', () => {
  expect(apply("-mr-56")).toEqual({ marginRight: -224 })
})

test('-mr-64 namespace', () => {
  expect(apply("-mr-64")).toEqual({ marginRight: -256 })
})

test('-mr-px namespace', () => {
  expect(apply("-mr-px")).toEqual({ marginRight: -2 })
})

test('-mb-1 namespace', () => {
  expect(apply("-mb-1")).toEqual({ marginBottom: -4 })
})

test('-mb-2 namespace', () => {
  expect(apply("-mb-2")).toEqual({ marginBottom: -8 })
})

test('-mb-3 namespace', () => {
  expect(apply("-mb-3")).toEqual({ marginBottom: -12 })
})

test('-mb-4 namespace', () => {
  expect(apply("-mb-4")).toEqual({ marginBottom: -16 })
})

test('-mb-5 namespace', () => {
  expect(apply("-mb-5")).toEqual({ marginBottom: -20 })
})

test('-mb-6 namespace', () => {
  expect(apply("-mb-6")).toEqual({ marginBottom: -24 })
})

test('-mb-7 namespace', () => {
  expect(apply("-mb-7")).toEqual({ marginBottom: -28 })
})

test('-mb-8 namespace', () => {
  expect(apply("-mb-8")).toEqual({ marginBottom: -32 })
})

test('-mb-9 namespace', () => {
  expect(apply("-mb-9")).toEqual({ marginBottom: -36 })
})

test('-mb-10 namespace', () => {
  expect(apply("-mb-10")).toEqual({ marginBottom: -40 })
})

test('-mb-12 namespace', () => {
  expect(apply("-mb-12")).toEqual({ marginBottom: -48 })
})

test('-mb-16 namespace', () => {
  expect(apply("-mb-16")).toEqual({ marginBottom: -64 })
})

test('-mb-20 namespace', () => {
  expect(apply("-mb-20")).toEqual({ marginBottom: -80 })
})

test('-mb-24 namespace', () => {
  expect(apply("-mb-24")).toEqual({ marginBottom: -96 })
})

test('-mb-32 namespace', () => {
  expect(apply("-mb-32")).toEqual({ marginBottom: -128 })
})

test('-mb-40 namespace', () => {
  expect(apply("-mb-40")).toEqual({ marginBottom: -160 })
})

test('-mb-48 namespace', () => {
  expect(apply("-mb-48")).toEqual({ marginBottom: -192 })
})

test('-mb-56 namespace', () => {
  expect(apply("-mb-56")).toEqual({ marginBottom: -224 })
})

test('-mb-64 namespace', () => {
  expect(apply("-mb-64")).toEqual({ marginBottom: -256 })
})

test('-mb-px namespace', () => {
  expect(apply("-mb-px")).toEqual({ marginBottom: -2 })
})

test('-ml-1 namespace', () => {
  expect(apply("-ml-1")).toEqual({ marginLeft: -4 })
})

test('-ml-2 namespace', () => {
  expect(apply("-ml-2")).toEqual({ marginLeft: -8 })
})

test('-ml-3 namespace', () => {
  expect(apply("-ml-3")).toEqual({ marginLeft: -12 })
})

test('-ml-4 namespace', () => {
  expect(apply("-ml-4")).toEqual({ marginLeft: -16 })
})

test('-ml-5 namespace', () => {
  expect(apply("-ml-5")).toEqual({ marginLeft: -20 })
})

test('-ml-6 namespace', () => {
  expect(apply("-ml-6")).toEqual({ marginLeft: -24 })
})

test('-ml-7 namespace', () => {
  expect(apply("-ml-7")).toEqual({ marginLeft: -28 })
})

test('-ml-8 namespace', () => {
  expect(apply("-ml-8")).toEqual({ marginLeft: -32 })
})

test('-ml-9 namespace', () => {
  expect(apply("-ml-9")).toEqual({ marginLeft: -36 })
})

test('-ml-10 namespace', () => {
  expect(apply("-ml-10")).toEqual({ marginLeft: -40 })
})

test('-ml-12 namespace', () => {
  expect(apply("-ml-12")).toEqual({ marginLeft: -48 })
})

test('-ml-16 namespace', () => {
  expect(apply("-ml-16")).toEqual({ marginLeft: -64 })
})

test('-ml-20 namespace', () => {
  expect(apply("-ml-20")).toEqual({ marginLeft: -80 })
})

test('-ml-24 namespace', () => {
  expect(apply("-ml-24")).toEqual({ marginLeft: -96 })
})

test('-ml-32 namespace', () => {
  expect(apply("-ml-32")).toEqual({ marginLeft: -128 })
})

test('-ml-40 namespace', () => {
  expect(apply("-ml-40")).toEqual({ marginLeft: -160 })
})

test('-ml-48 namespace', () => {
  expect(apply("-ml-48")).toEqual({ marginLeft: -192 })
})

test('-ml-56 namespace', () => {
  expect(apply("-ml-56")).toEqual({ marginLeft: -224 })
})

test('-ml-64 namespace', () => {
  expect(apply("-ml-64")).toEqual({ marginLeft: -256 })
})

test('-ml-px namespace', () => {
  expect(apply("-ml-px")).toEqual({ marginLeft: -2 })
})

