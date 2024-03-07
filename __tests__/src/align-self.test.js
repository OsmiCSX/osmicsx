import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('self-start namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('self-start')).toEqual([{ alignSelf: "flex-start" }])
})

test('self-center namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('self-center')).toEqual([{ alignSelf: "center" }])
})

test('self-end namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('self-end')).toEqual([{ alignSelf: "flex-end" }])
})

test('self-auto namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('self-auto')).toEqual([{ alignSelf: "auto" }])
})

test('self-stretch namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('self-stretch')).toEqual([{ alignSelf: "stretch" }])
})

test('self-baseline namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })
  
  expect(result.current.apply('self-baseline')).toEqual([{ alignSelf: "baseline" }])
})
