import overflow from "../../src/overflow";

test('overflow-visible namespace', () => {
  expect(overflow["overflow-visible"]).toEqual({ overflow: "visible" })
})

test('overflow-hidden namespace', () => {
  expect(overflow["overflow-hidden"]).toEqual({ overflow: "hidden" })
})
