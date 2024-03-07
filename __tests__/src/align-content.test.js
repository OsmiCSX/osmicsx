import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('content-start namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('content-start')).toEqual([{ alignContent: "flex-start" }])
})

test('content-center namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('content-center')).toEqual([{ alignContent: "center" }])
})

test('content-end namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('content-end')).toEqual([{ alignContent: "flex-end" }])
})

test('content-stretch namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('content-stretch')).toEqual([{ alignContent: "stretch" }])
})

test('content-between namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('content-between')).toEqual([{ alignContent: "space-between" }])
})

test('content-around namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('content-around')).toEqual([{ alignContent: "space-around" }])
})
