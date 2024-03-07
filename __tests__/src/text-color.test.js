import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("text-black with default opacity", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-black")).toEqual([{ color: "rgba(0, 0, 0, 1)" }]);
});

test("text-black with opacity 25", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-black text-opacity-25")).toEqual([{
    color: "rgba(0, 0, 0, 0.25)",
  }]);
});
