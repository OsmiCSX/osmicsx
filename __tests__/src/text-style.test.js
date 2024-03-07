import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("italic namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("italic")).toEqual([{ fontStyle: "italic" }]);
});

test("underline namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("underline")).toEqual([{ textDecorationLine: "underline" }]);
});

test("font-light namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-light")).toEqual([{ fontWeight: "300" }]);
});

test("font-black namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-black")).toEqual([{ fontWeight: "900" }]);
});

test("font-normal namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-normal")).toEqual([{ fontWeight: "400" }]);
});

test("font-medium namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-medium")).toEqual([{ fontWeight: "500" }]);
});

test("font-bold namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-bold")).toEqual([{ fontWeight: "700" }]);
});

test("font-thin namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-thin")).toEqual([{ fontWeight: "200" }]);
});

test("line-through namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("line-through")).toEqual([{
    textDecorationLine: "line-through",
  }]);
});

test("no-underline namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("no-underline")).toEqual([{ textDecorationLine: "none" }]);
});

test("font-hairline namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-hairline")).toEqual([{ fontWeight: "100" }]);
});

test("font-semibold namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-semibold")).toEqual([{ fontWeight: "600" }]);
});

test("font-extrabold namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("font-extrabold")).toEqual([{ fontWeight: "800" }]);
});
