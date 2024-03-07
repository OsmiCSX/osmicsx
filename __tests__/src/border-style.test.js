import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('border-solid namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("border-solid")).toEqual([{ borderStyle: "solid" }]);
})

test('border-dotted namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("border-dotted")).toEqual([{ borderStyle: "dotted" }]);
})

test('border-dashed namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("border-dashed")).toEqual([{ borderStyle: "dashed" }]);
})
