import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("border-black with default opacity", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("border-black")).toEqual([{ borderColor: "rgba(0, 0, 0, 1)"}])
})

test("border-black with opacity 25", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("border-black border-opacity-25")).toEqual([{ borderColor: "rgba(0, 0, 0, 0.25)"}])
})
