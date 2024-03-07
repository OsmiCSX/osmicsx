import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("overflow-visible namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("overflow-visible")).toEqual([{ overflow: "visible" }]);
});

test("overflow-hidden namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("overflow-hidden")).toEqual([{ overflow: "hidden" }]);
});
