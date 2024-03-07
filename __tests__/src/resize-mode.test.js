import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("resize-cover namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("resize-cover")).toEqual([{ resizeMode: "cover" }]);
});

test("resize-contain namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("resize-contain")).toEqual([{ resizeMode: "contain" }]);
});

test("resize-stretch namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("resize-stretch")).toEqual([{ resizeMode: "stretch" }]);
});

test("resize-center namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("resize-center")).toEqual([{ resizeMode: "center" }]);
});

test("resize-repeat namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("resize-repeat")).toEqual([{ resizeMode: "repeat" }]);
});
