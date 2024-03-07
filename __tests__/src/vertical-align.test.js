import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("align-auto namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("align-auto")).toEqual([{ textAlignVertical: "auto" }]);
});

test("align-top namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("align-top")).toEqual([{ textAlignVertical: "top" }]);
});

test("align-bottom namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("align-bottom")).toEqual([{ textAlignVertical: "bottom" }]);
});

test("align-center namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("align-center")).toEqual([{ textAlignVertical: "center" }]);
});
