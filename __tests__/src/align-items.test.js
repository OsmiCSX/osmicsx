import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('items-stretch namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('items-stretch')).toEqual([{ alignItems: "stretch" }])
})

test('items-start namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('items-start')).toEqual([{ alignItems: "flex-start" }])
})

test('items-center namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('items-center')).toEqual([{ alignItems: "center" }])
})

test('items-end namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('items-end')).toEqual([{ alignItems: "flex-end" }])
})

test('items-baseline namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('items-baseline')).toEqual([{ alignItems: "baseline" }])
})
