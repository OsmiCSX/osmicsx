import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("uppercase namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("uppercase")).toEqual([{ textTransform: "uppercase" }]);
});

test("lowercase namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("lowercase")).toEqual([{ textTransform: "lowercase" }]);
});

test("capitalize namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("capitalize")).toEqual([{ textTransform: "capitalize" }]);
});

test("normal-case namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("normal-case")).toEqual([{ textTransform: "normal-case" }]);
});
