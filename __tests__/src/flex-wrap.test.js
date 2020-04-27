import flexWrap from "../../src/flex-wrap";

test('wrap namespace', () => {
  expect(flexWrap["wrap"]).toEqual({ flexWrap: "wrap" })
})

test('no-wrap namespace', () => {
  expect(flexWrap["no-wrap"]).toEqual({ flexWrap: "nowrap" })
})
