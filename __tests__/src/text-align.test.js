import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("text-left namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-left")).toEqual([{ textAlign: "left" }]);
});

test("text-center namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-center")).toEqual([{ textAlign: "center" }]);
});

test("text-right namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-right")).toEqual([{ textAlign: "right" }]);
});

test("text-justify namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text-justify")).toEqual([{ textAlign: "justify" }]);
});
