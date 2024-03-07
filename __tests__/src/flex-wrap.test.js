import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('wrap namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("wrap")).toEqual([{ flexWrap: "wrap" }]);
})

test('no-wrap namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("no-wrap")).toEqual([{ flexWrap: "nowrap" }]);
})
