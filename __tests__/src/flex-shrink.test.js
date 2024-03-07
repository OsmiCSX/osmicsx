import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('flex-shrink namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink")).toEqual([{ flexShrink: 1 }]);
})

test('flex-shrink-0 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-0")).toEqual([{ flexShrink: 0 }]);
})

test('flex-shrink-2 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-2")).toEqual([{ flexShrink: 2 }]);
})

test('flex-shrink-3 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-3")).toEqual([{ flexShrink: 3 }]);
})

test('flex-shrink-4 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-4")).toEqual([{ flexShrink: 4 }]);
})

test('flex-shrink-5 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-5")).toEqual([{ flexShrink: 5 }]);
})

test('flex-shrink-6 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-6")).toEqual([{ flexShrink: 6 }]);
})

test('flex-shrink-7 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-7")).toEqual([{ flexShrink: 7 }]);
})

test('flex-shrink-8 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-8")).toEqual([{ flexShrink: 8 }]);
})

test('flex-shrink-9 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-9")).toEqual([{ flexShrink: 9 }]);
})

test('flex-shrink-10 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-10")).toEqual([{ flexShrink: 10 }]);
})

test('flex-shrink-11 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-11")).toEqual([{ flexShrink: 11 }]);
})

test('flex-shrink-12 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-shrink-12")).toEqual([{ flexShrink: 12 }]);
})
