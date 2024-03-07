import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('traacking-tighter namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("tracking-tighter")).toEqual([{ letterSpacing: -0.8 }]);
})

test('tracking-widest namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("tracking-widest")).toEqual([{ letterSpacing: 1.6 }]);
})

test('tracking-normal namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("tracking-normal")).toEqual([{ letterSpacing: 0 }]);
})

test('tracking-wider namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("tracking-wider")).toEqual([{ letterSpacing: 0.8 }]);
})

test('tracking-tight namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("tracking-tight")).toEqual([{ letterSpacing: -0.4 }]);
})

test('tracking-wide', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("tracking-wide")).toEqual([{ letterSpacing: 0.4 }]);
})
