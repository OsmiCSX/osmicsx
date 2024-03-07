import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("translate-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("translate-x-50")).toEqual([{ transform: [{ translateX: 50 }] }]);
});

test("translate-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("translate-x-75")).toEqual([{ transform: [{ translateX: 75 }] }]);
});

test("translate-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("translate-x-100")).toEqual([{ transform: [{ translateX: 100 }] }]);
});

test("translate-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("translate-y-50")).toEqual([{ transform: [{ translateY: 50 }] }]);
});

test("translate-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("translate-y-75")).toEqual([{ transform: [{ translateY: 75 }] }]);
});

test("translate-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("translate-y-100")).toEqual([{ transform: [{ translateY: 100 }] }]);
});

test("-translate-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-translate-x-50")).toEqual([{ transform: [{ translateX: -50 }] }]);
});

test("-translate-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-translate-x-75")).toEqual([{ transform: [{ translateX: -75 }] }]);
});

test("-translate-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-translate-x-100")).toEqual([{ transform: [{ translateX: -100 }] }]);
});

test("-translate-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-translate-y-50")).toEqual([{ transform: [{ translateY: -50 }] }]);
});

test("-translate-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-translate-y-75")).toEqual([{ transform: [{ translateY: -75 }] }]);
});

test("-translate-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-translate-y-100")).toEqual([{ transform: [{ translateY: -100 }] }]);
});