import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('justify-end namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("justify-end")).toEqual([{ justifyContent: "flex-end" }]);
})

test('justify-center namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("justify-center")).toEqual([{ justifyContent: "center" }]);
})

test('justify-between namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("justify-between")).toEqual([{ justifyContent: "space-between" }]);
})

test('justify-start namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("justify-start")).toEqual([{ justifyContent: "flex-start" }]);
})

test('justify-evenly namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("justify-evenly")).toEqual([{ justifyContent: "space-evenly" }]);
})

test('justify-around namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("justify-around")).toEqual([{ justifyContent: "space-around" }]);
})

