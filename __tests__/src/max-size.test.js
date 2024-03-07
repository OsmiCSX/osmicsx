import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('max-w-50 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('max-w-50')).toEqual([{ maxWidth: 50 }]);
})

test('max-w-75 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('max-w-75')).toEqual([{ maxWidth: 75 }]);
})

test('max-w-100 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('max-w-100')).toEqual([{ maxWidth: 100 }]);
})

test('max-h-50 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('max-h-50')).toEqual([{ maxHeight: 50 }]);
})

test('max-h-75 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('max-h-75')).toEqual([{ maxHeight: 75 }]);
})

test('max-h-100 namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('max-h-100')).toEqual([{ maxHeight: 100 }]);
})