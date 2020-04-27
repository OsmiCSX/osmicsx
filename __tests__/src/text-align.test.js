import textAlign from "../../src/text-align";

test('text-left namespace', () => {
  expect(textAlign["text-left"]).toEqual({ textAlign: "left" })
})

test('text-center namespace', () => {
  expect(textAlign["text-center"]).toEqual({ textAlign: "center" })
})

test('text-right namespace', () => {
  expect(textAlign["text-right"]).toEqual({ textAlign: "right" })
})

test('text-justify namespace', () => {
  expect(textAlign["text-justify"]).toEqual({ textAlign: "justify" })
})
