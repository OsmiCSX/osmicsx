import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("opacity-0 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("opacity-0")).toEqual([{ opacity: 0 }]);
});

test("opacity-25 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("opacity-25")).toEqual([{ opacity: 0.25 }]);
});

test("opacity-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("opacity-50")).toEqual([{ opacity: 0.5 }]);
});

test("opacity-75 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("opacity-75")).toEqual([{ opacity: 0.75 }]);
});

test("opacity-100 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("opacity-100")).toEqual([{ opacity: 1 }]);
});
