import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("z-0 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("z-0")).toEqual([{ zIndex: 0 }]);
});

test("z-10 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("z-10")).toEqual([{ zIndex: 10 }]);
});

test("z-20 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("z-20")).toEqual([{ zIndex: 20 }]);
});

test("z-30 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("z-30")).toEqual([{ zIndex: 30 }]);
});

test("z-40 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("z-40")).toEqual([{ zIndex: 40 }]);
});

test("z-50 namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("z-50")).toEqual([{ zIndex: 50 }]);
});
