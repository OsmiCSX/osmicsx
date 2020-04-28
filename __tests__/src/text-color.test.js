import textColor from "../../src/text-color";
import colors from "../../data/colors.json";

test('text-transparent namespace', () => {
  expect(textColor["text-transparent"]).toEqual({ color: colors["transparent"] })
})

test('text-black namespace', () => {
  expect(textColor["text-black"]).toEqual({ color: colors["black"] })
})

test('text-white namespace', () => {
  expect(textColor["text-white"]).toEqual({ color: colors["white"] })
})

