import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('min-w-50 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('min-w-50')).toEqual([{ minWidth: 50 }]);
})

test('min-w-75 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('min-w-75')).toEqual([{ minWidth: 75 }]);
})

test('min-w-100 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('min-w-100')).toEqual([{ minWidth: 100 }]);
})

test('min-h-50 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('min-h-50')).toEqual([{ minHeight: 50 }]);
})

test('min-h-75 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('min-h-75')).toEqual([{ minHeight: 75 }]);
})

test('min-h-100 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('min-h-100')).toEqual([{ minHeight: 100 }]);
})