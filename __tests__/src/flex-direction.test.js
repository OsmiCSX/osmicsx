import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('row namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("row")).toEqual([{ flexDirection: "row" }]);
})

test('col namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("col")).toEqual([{ flexDirection: "column" }]);
})

test('row-reverse namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("row-reverse")).toEqual([{ flexDirection: "row-reverse" }]);
})

test('col-reverse namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("col-reverse")).toEqual([{ flexDirection: "column-reverse" }]);
})
