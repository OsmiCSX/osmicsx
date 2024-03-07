import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('bg-black with default opacity', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("bg-black")).toEqual([{ backgroundColor: "rgba(0, 0, 0, 1)"}])
})

test('bg-black with opacity 25', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("bg-black bg-opacity-25")).toEqual([{ backgroundColor: "rgba(0, 0, 0, 0.25)"}])
})

test('bg-red-500 with opacity 25', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("bg-red-500 bg-opacity-25")).toEqual([{ backgroundColor: "rgba(239, 68, 68, 0.25)"}])
})
