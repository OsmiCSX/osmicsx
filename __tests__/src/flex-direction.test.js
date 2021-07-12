import apply from '../../dist/core/apply';

test('row namespace', () => {
  expect(apply("row")).toEqual({ flexDirection: "row" })
})

test('col namespace', () => {
  expect(apply("col")).toEqual({ flexDirection: "column" })
})

test('row-reverse namespace', () => {
  expect(apply("row-reverse")).toEqual({ flexDirection: "row-reverse" })
})

test('col-reverse namespace', () => {
  expect(apply("col-reverse")).toEqual({ flexDirection: "column-reverse" })
})
