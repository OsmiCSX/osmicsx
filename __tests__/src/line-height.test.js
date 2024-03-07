import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('leading-normal namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-normal")).toEqual([{ lineHeight: 1.5 }]);
})

test('leading-relaxed namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-relaxed")).toEqual([{ lineHeight: 1.625 }]);
})

test('leading-tight namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-tight")).toEqual([{ lineHeight: 1.25 }]);
})

test('leading-loose namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-loose")).toEqual([{ lineHeight: 2 }]);
})

test('leading-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-none")).toEqual([{ lineHeight: 1 }]);
})

test('leading-snug namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-snug")).toEqual([{ lineHeight: 1.375 }]);
})

test('leading-10 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-10")).toEqual([{ lineHeight: 40 }]);
})

test('leading-3 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-3")).toEqual([{ lineHeight: 12 }]);
})

test('leading-4 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-4")).toEqual([{ lineHeight: 16 }]);
})

test('leading-5 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-5")).toEqual([{ lineHeight: 20 }]);
})

test('leading-6 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-6")).toEqual([{ lineHeight: 24 }]);
})

test('leading-7 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-7")).toEqual([{ lineHeight: 28 }]);
})

test('leading-8 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-8")).toEqual([{ lineHeight: 32 }]);
})

test('leading-9 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("leading-9")).toEqual([{ lineHeight: 36 }]);
})
