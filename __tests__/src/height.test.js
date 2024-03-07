import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("fixed 100 height namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("h-100")).toEqual([{ height: 100 }]);
});

test("fixed 75 height namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("h-75")).toEqual([{ height: 75 }]);
});

test("fixed 50 height namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("h-50")).toEqual([{ height: 50 }]);
});

test("100% height namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("h%100")).toEqual([{ height: "100%" }]);
});

test("75% height namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("h%75")).toEqual([{ height: "75%" }]);
});

test("50% height namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("h%50")).toEqual([{ height: "50%" }]);
});