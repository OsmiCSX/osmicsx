import { renderHook } from '@testing-library/react-hooks'
import { OsmiProvider, useStyles } from '../../dist'

const wrapper = ({ children }) => (
  <OsmiProvider>{children}</OsmiProvider>
)

test('rounded-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('rounded-none')).toEqual([{ borderRadius: 0 }]);
})

test('rounded-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('rounded-sm')).toEqual([{ borderRadius: 2 }]);
})

test('rounded namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('rounded')).toEqual([{ borderRadius: 4 }]);
})

test('rounded-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('rounded-md')).toEqual([{ borderRadius: 6 }]);
})

test('rounded-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('rounded-lg')).toEqual([{ borderRadius: 8 }]);
})

test('rounded-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply('rounded-full')).toEqual([{ borderRadius: 9999 }]);
})

test('rounded-t-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-t-none")).toEqual([{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }]);
})

test('rounded-r-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-r-none")).toEqual([{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }]);
})

test('rounded-b-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-b-none")).toEqual([{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }]);
})

test('rounded-l-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-l-none")).toEqual([{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]);
})

test('rounded-t-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-t-sm")).toEqual([{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }]);
})

test('rounded-r-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-r-sm")).toEqual([{ borderTopRightRadius: 2, borderBottomRightRadius: 2 }]);
})

test('rounded-b-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-b-sm")).toEqual([{ borderBottomRightRadius: 2, borderBottomLeftRadius: 2 }]);
})

test('rounded-l-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-l-sm")).toEqual([{ borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }]);
})

test('rounded-t namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-t")).toEqual([{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }]);
})

test('rounded-r namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-r")).toEqual([{ borderTopRightRadius: 4, borderBottomRightRadius: 4 }]);
})

test('rounded-b namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-b")).toEqual([{ borderBottomRightRadius: 4, borderBottomLeftRadius: 4 }]);
})

test('rounded-l namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-l")).toEqual([{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }]);
})

test('rounded-t-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-t-md")).toEqual([{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }]);
})

test('rounded-r-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-r-md")).toEqual([{ borderTopRightRadius: 6, borderBottomRightRadius: 6 }]);
})

test('rounded-b-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-b-md")).toEqual([{ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 }]);
})

test('rounded-l-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-l-md")).toEqual([{ borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }]);
})

test('rounded-t-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-t-lg")).toEqual([{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }]);
})

test('rounded-r-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-r-lg")).toEqual([{ borderTopRightRadius: 8, borderBottomRightRadius: 8 }]);
})

test('rounded-b-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-b-lg")).toEqual([{ borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }]);
})

test('rounded-l-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-l-lg")).toEqual([{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }]);
})

test('rounded-t-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-t-full")).toEqual([{ borderTopLeftRadius: 9999, borderTopRightRadius: 9999 }]);
})

test('rounded-r-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-r-full")).toEqual([{ borderTopRightRadius: 9999, borderBottomRightRadius: 9999 }]);
})

test('rounded-b-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-b-full")).toEqual([{ borderBottomRightRadius: 9999, borderBottomLeftRadius: 9999 }]);
})

test('rounded-l-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-l-full")).toEqual([{ borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 }]);
})

test('rounded-tl-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tl-none")).toEqual([{ borderTopLeftRadius: 0 }]);
})

test('rounded-tr-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tr-none")).toEqual([{ borderTopRightRadius: 0 }]);
})

test('rounded-br-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-br-none")).toEqual([{ borderBottomRightRadius: 0 }]);
})

test('rounded-bl-none namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-bl-none")).toEqual([{ borderBottomLeftRadius: 0 }]);
})

test('rounded-tl-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tl-sm")).toEqual([{ borderTopLeftRadius: 2 }]);
})

test('rounded-tr-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tr-sm")).toEqual([{ borderTopRightRadius: 2 }]);
})

test('rounded-br-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-br-sm")).toEqual([{ borderBottomRightRadius: 2 }]);
})

test('rounded-bl-sm namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-bl-sm")).toEqual([{ borderBottomLeftRadius: 2 }]);
})

test('rounded-tl namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tl")).toEqual([{ borderTopLeftRadius: 4 }]);
})

test('rounded-tr namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tr")).toEqual([{ borderTopRightRadius: 4 }]);
})

test('rounded-br namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-br")).toEqual([{ borderBottomRightRadius: 4 }]);
})

test('rounded-bl namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-bl")).toEqual([{ borderBottomLeftRadius: 4 }]);
})

test('rounded-tl-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tl-md")).toEqual([{ borderTopLeftRadius: 6 }]);
})

test('rounded-tr-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tr-md")).toEqual([{ borderTopRightRadius: 6 }]);
})

test('rounded-br-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-br-md")).toEqual([{ borderBottomRightRadius: 6 }]);
})

test('rounded-bl-md namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-bl-md")).toEqual([{ borderBottomLeftRadius: 6 }]);
})

test('rounded-tl-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tl-lg")).toEqual([{ borderTopLeftRadius: 8 }]);
})

test('rounded-tr-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tr-lg")).toEqual([{ borderTopRightRadius: 8 }]);
})

test('rounded-br-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-br-lg")).toEqual([{ borderBottomRightRadius: 8 }]);
})

test('rounded-bl-lg namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-bl-lg")).toEqual([{ borderBottomLeftRadius: 8 }]);
})

test('rounded-tl-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tl-full")).toEqual([{ borderTopLeftRadius: 9999 }]);
})

test('rounded-tr-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-tr-full")).toEqual([{ borderTopRightRadius: 9999 }]);
})

test('rounded-br-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-br-full")).toEqual([{ borderBottomRightRadius: 9999 }]);
})

test('rounded-bl-full namespace', () => {
  const { result } = renderHook(() => useStyles(), { wrapper })

  expect(result.current.apply("rounded-bl-full")).toEqual([{ borderBottomLeftRadius: 9999 }]);
})
