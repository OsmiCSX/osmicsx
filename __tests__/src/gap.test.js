import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('gap-0 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-0")).toEqual([{ "gap": 0 }]);
})

test('gap-x-0 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-x-0")).toEqual([{ "columnGap": 0 }]);
})

test('gap-y-0 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-y-0")).toEqual([{ "rowGap": 0 }]);
})

test('gap-1 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-1")).toEqual([{ "gap": 4 }]);
})

test('gap-x-1 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-x-1")).toEqual([{ "columnGap": 4 }]);
})

test('gap-y-1 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-y-1")).toEqual([{ "rowGap": 4 }]);
})

test('gap-4 gap-x-1 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-4 gap-x-1")).toEqual([{ "gap": 16, "columnGap": 4 }]);
})

test('gap-4 gap-y-1 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("gap-4 gap-y-1")).toEqual([{ "gap": 16, "rowGap": 4 }]);
})