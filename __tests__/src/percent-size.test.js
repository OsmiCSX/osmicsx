import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test("min-w namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("min-w%50")).toEqual([{ minWidth: "50%"}]);
})

test("w namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("w%50")).toEqual([{ width: "50%"}]);
})

test("max-w namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("max-w%50")).toEqual([{ maxWidth: "50%"}]);
})

test("min-h namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("min-h%50")).toEqual([{ minHeight: "50%"}]);
})

test("h namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("h%50")).toEqual([{ height: "50%"}]);
})

test("max-h namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("max-h%50")).toEqual([{ maxHeight: "50%"}]);
})

test("text namespace", () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("text%50")).toEqual([{ fontSize: "50%"}]);
})
