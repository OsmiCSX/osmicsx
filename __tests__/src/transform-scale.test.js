import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("scale-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-50")).toEqual([{ transform: [{ scale: 50 }] }]);
});

test("scale-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-75")).toEqual([{ transform: [{ scale: 75 }] }]);
});

test("scale-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-100")).toEqual([{ transform: [{ scale: 100 }] }]);
});

test("scale-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-x-50")).toEqual([{ transform: [{ scaleX: 50 }] }]);
});

test("scale-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-x-75")).toEqual([{ transform: [{ scaleX: 75 }] }]);
});

test("scale-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-x-100")).toEqual([{ transform: [{ scaleX: 100 }] }]);
});

test("scale-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-y-50")).toEqual([{ transform: [{ scaleY: 50 }] }]);
});

test("scale-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-y-75")).toEqual([{ transform: [{ scaleY: 75 }] }]);
});

test("scale-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("scale-y-100")).toEqual([{ transform: [{ scaleY: 100 }] }]);
});

test("-scale-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-50")).toEqual([{ transform: [{ scale: -50 }] }]);
});

test("-scale-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-75")).toEqual([{ transform: [{ scale: -75 }] }]);
});

test("-scale-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-100")).toEqual([{ transform: [{ scale: -100 }] }]);
});

test("-scale-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-x-50")).toEqual([{ transform: [{ scaleX: -50 }] }]);
});

test("-scale-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-x-75")).toEqual([{ transform: [{ scaleX: -75 }] }]);
});

test("-scale-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-x-100")).toEqual([{ transform: [{ scaleX: -100 }] }]);
});

test("-scale-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-y-50")).toEqual([{ transform: [{ scaleY: -50 }] }]);
});

test("-scale-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-y-75")).toEqual([{ transform: [{ scaleY: -75 }] }]);
});

test("-scale-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-scale-y-100")).toEqual([{ transform: [{ scaleY: -100 }] }]);
});