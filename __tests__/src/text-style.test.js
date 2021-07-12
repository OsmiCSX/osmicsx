import apply from "../../dist/core/apply";

test("italic namespace", () => {
  expect(apply("italic")).toEqual({ fontStyle: "italic" });
});

test("underline namespace", () => {
  expect(apply("underline")).toEqual({ textDecorationLine: "underline" });
});

test("font-light namespace", () => {
  expect(apply("font-light")).toEqual({ fontWeight: "300" });
});

test("font-black namespace", () => {
  expect(apply("font-black")).toEqual({ fontWeight: "900" });
});

test("font-normal namespace", () => {
  expect(apply("font-normal")).toEqual({ fontWeight: "400" });
});

test("font-medium namespace", () => {
  expect(apply("font-medium")).toEqual({ fontWeight: "500" });
});

test("font-bold namespace", () => {
  expect(apply("font-bold")).toEqual({ fontWeight: "700" });
});

test("font-thin namespace", () => {
  expect(apply("font-thin")).toEqual({ fontWeight: "200" });
});

test("line-through namespace", () => {
  expect(apply("line-through")).toEqual({
    textDecorationLine: "line-through",
  });
});

test("no-underline namespace", () => {
  expect(apply("no-underline")).toEqual({ textDecorationLine: "none" });
});

test("font-hairline namespace", () => {
  expect(apply("font-hairline")).toEqual({ fontWeight: "100" });
});

test("font-semibold namespace", () => {
  expect(apply("font-semibold")).toEqual({ fontWeight: "600" });
});

test("font-extrabold namespace", () => {
  expect(apply("font-extrabold")).toEqual({ fontWeight: "800" });
});
