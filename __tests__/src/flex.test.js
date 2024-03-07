import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("full")).toEqual([{ width: '100%' }]);
})

test('flex namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex")).toEqual([{ flex: 1 }]);
})

test('flex-0 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-0")).toEqual([{ flex: 0 }]);
})

test('flex-2 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-2")).toEqual([{ flex: 2 }]);
})

test('flex-3 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-3")).toEqual([{ flex: 3 }]);
})

test('flex-4 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-4")).toEqual([{ flex: 4 }]);
})

test('flex-5 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-5")).toEqual([{ flex: 5 }]);
})

test('flex-6 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-6")).toEqual([{ flex: 6 }]);
})

test('flex-7 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-7")).toEqual([{ flex: 7 }]);
})

test('flex-8 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-8")).toEqual([{ flex: 8 }]);
})

test('flex-9 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-9")).toEqual([{ flex: 9 }]);
})

test('flex-10 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-10")).toEqual([{ flex: 10 }]);
})

test('flex-11 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-11")).toEqual([{ flex: 11 }]);
})

test('flex-12 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-12")).toEqual([{ flex: 12 }]);
})
