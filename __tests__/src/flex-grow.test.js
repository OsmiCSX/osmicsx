import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('flex-grow namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow")).toEqual([{ flex: 1 }]);
})

test('flex-grow-0 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-0")).toEqual([{ flex: 0 }]);
})

test('flex-grow-2 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-2")).toEqual([{ flex: 2 }]);
})

test('flex-grow-3 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-3")).toEqual([{ flex: 3 }]);
})

test('flex-grow-4 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-4")).toEqual([{ flex: 4 }]);
})

test('flex-grow-5 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-5")).toEqual([{ flex: 5 }]);
})

test('flex-grow-6 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-6")).toEqual([{ flex: 6 }]);
})

test('flex-grow-7 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-7")).toEqual([{ flex: 7 }]);
})

test('flex-grow-8 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-8")).toEqual([{ flex: 8 }]);
})

test('flex-grow-9 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-9")).toEqual([{ flex: 9 }]);
})

test('flex-grow-10 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-10")).toEqual([{ flex: 10 }]);
})

test('flex-grow-11 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-11")).toEqual([{ flex: 11 }]);
})

test('flex-grow-12 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("flex-grow-12")).toEqual([{ flex: 12 }]);
})
