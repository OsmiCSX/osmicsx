import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("rotate-0 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-0")).toEqual([{ transform: [{ rotate: "0" }] }]);
});

test("rotate-45 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-45")).toEqual([{ transform: [{ rotate: "45deg" }] }]);
});

test("rotate-90 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-90")).toEqual([{ transform: [{ rotate: "90deg" }] }]);
});

test("rotate-180 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rotate-180")).toEqual([{ transform: [{ rotate: "180deg" }] }]);
});

test("-rotate-45 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-45")).toEqual([{ transform: [{ rotate: "-45deg" }] }]);
});

test("-rotate-90 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-90")).toEqual([{ transform: [{ rotate: "-90deg" }] }]);
});

test("-rotate-180 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("-rotate-180")).toEqual([{ transform: [{ rotate: "-180deg" }] }]);
});
