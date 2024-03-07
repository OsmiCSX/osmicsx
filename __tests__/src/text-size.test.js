import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("text-base namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-base")).toEqual([{ fontSize: 16 }]);
});

test("text-xs namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-xs")).toEqual([{ fontSize: 12 }]);
});

test("text-sm namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-sm")).toEqual([{ fontSize: 14 }]);
});

test("text-lg namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-lg")).toEqual([{ fontSize: 18 }]);
});

test("text-xl namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-xl")).toEqual([{ fontSize: 20 }]);
});

test("text-2xl namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-2xl")).toEqual([{ fontSize: 22 }]);
});

test("text-3xl namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-3xl")).toEqual([{ fontSize: 24 }]);
});

test("text-4xl namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-4xl")).toEqual([{ fontSize: 26 }]);
});

test("text-5xl namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-5xl")).toEqual([{ fontSize: 28 }]);
});

test("text-6xl namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-6xl")).toEqual([{ fontSize: 30 }]);
});
