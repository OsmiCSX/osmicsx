import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("rotate-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-50")).toEqual([{ transform: [{ rotate: "50deg" }] }]);
});

test("rotate-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-75")).toEqual([{ transform: [{ rotate: "75deg" }] }]);
});

test("rotate-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-100")).toEqual([{ transform: [{ rotate: "100deg" }] }]);
});

test("rotate-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-x-50")).toEqual([{ transform: [{ rotateX: "50deg" }] }]);
});

test("rotate-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-x-75")).toEqual([{ transform: [{ rotateX: "75deg" }] }]);
});

test("rotate-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-x-100")).toEqual([{ transform: [{ rotateX: "100deg" }] }]);
});

test("rotate-z-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-z-50")).toEqual([{ transform: [{ rotateZ: "50deg" }] }]);
});

test("rotate-z-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-z-75")).toEqual([{ transform: [{ rotateZ: "75deg" }] }]);
});

test("rotate-z-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-z-100")).toEqual([{ transform: [{ rotateZ: "100deg" }] }]);
});

test("rotate-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-y-50")).toEqual([{ transform: [{ rotateY: "50deg" }] }]);
});

test("rotate-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-y-75")).toEqual([{ transform: [{ rotateY: "75deg" }] }]);
});

test("rotate-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-y-100")).toEqual([{ transform: [{ rotateY: "100deg" }] }]);
});

test("-rotate-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-50")).toEqual([{ transform: [{ rotate: "-50deg" }] }]);
});

test("-rotate-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-75")).toEqual([{ transform: [{ rotate: "-75deg" }] }]);
});

test("-rotate-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-100")).toEqual([{ transform: [{ rotate: "-100deg" }] }]);
});

test("-rotate-x-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-x-50")).toEqual([{ transform: [{ rotateX: "-50deg" }] }]);
});

test("-rotate-x-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-x-75")).toEqual([{ transform: [{ rotateX: "-75deg" }] }]);
});

test("-rotate-x-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-x-100")).toEqual([{ transform: [{ rotateX: "-100deg" }] }]);
});

test("-rotate-y-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-y-50")).toEqual([{ transform: [{ rotateY: "-50deg" }] }]);
});

test("-rotate-y-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-y-75")).toEqual([{ transform: [{ rotateY: "-75deg" }] }]);
});

test("-rotate-y-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-y-100")).toEqual([{ transform: [{ rotateY: "-100deg" }] }]);
});

test("-rotate-z-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-z-50")).toEqual([{ transform: [{ rotateZ: "-50deg" }] }]);
});

test("-rotate-z-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-z-75")).toEqual([{ transform: [{ rotateZ: "-75deg" }] }]);
});

test("-rotate-z-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-z-100")).toEqual([{ transform: [{ rotateZ: "-100deg" }] }]);
});