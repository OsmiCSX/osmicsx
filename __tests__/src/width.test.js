import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("fixed 100 width namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("w-100")).toEqual([{ width: 100 }]);
});

test("fixed 75 width namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("w-75")).toEqual([{ width: 75 }]);
});

test("fixed 50 width namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("w-50")).toEqual([{ width: 50 }]);
});

test("100% width namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("w%100")).toEqual([{ width: "100%" }]);
});

test("75% width namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("w%75")).toEqual([{ width: "75%" }]);
});

test("50% width namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("w%50")).toEqual([{ width: "50%" }]);
});