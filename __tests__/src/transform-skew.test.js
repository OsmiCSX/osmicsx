import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("skew-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("skew-x-50")).toEqual([{ transform: [{ skewX: "50deg" }] }]);
});

test("skew-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("skew-x-75")).toEqual([{ transform: [{ skewX: "75deg" }] }]);
});

test("skew-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("skew-x-100")).toEqual([{ transform: [{ skewX: "100deg" }] }]);
});

test("skew-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("skew-y-50")).toEqual([{ transform: [{ skewY: "50deg" }] }]);
});

test("skew-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("skew-y-75")).toEqual([{ transform: [{ skewY: "75deg" }] }]);
});

test("skew-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("skew-y-100")).toEqual([{ transform: [{ skewY: "100deg" }] }]);
});

test("-skew-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-skew-x-50")).toEqual([{ transform: [{ skewX: "-50deg" }] }]);
});

test("-skew-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-skew-x-75")).toEqual([{ transform: [{ skewX: "-75deg" }] }]);
});

test("-skew-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-skew-x-100")).toEqual([{ transform: [{ skewX: "-100deg" }] }]);
});

test("-skew-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-skew-y-50")).toEqual([{ transform: [{ skewY: "-50deg" }] }]);
});

test("-skew-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-skew-y-75")).toEqual([{ transform: [{ skewY: "-75deg" }] }]);
});

test("-skew-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-skew-y-100")).toEqual([{ transform: [{ skewY: "-100deg" }] }]);
});