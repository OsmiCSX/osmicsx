import apply from '../../dist/core/apply';

test('rounded-none namespace', () => {
  expect(apply('rounded-none')).toEqual({ borderRadius: 0 })
})

test('rounded-sm namespace', () => {
  expect(apply('rounded-sm')).toEqual({ borderRadius: 2 })
})

test('rounded namespace', () => {
  expect(apply('rounded')).toEqual({ borderRadius: 4 })
})

test('rounded-md namespace', () => {
  expect(apply('rounded-md')).toEqual({ borderRadius: 6 })
})

test('rounded-lg namespace', () => {
  expect(apply('rounded-lg')).toEqual({ borderRadius: 8 })
})

test('rounded-full namespace', () => {
  expect(apply('rounded-full')).toEqual({ borderRadius: 9999 })
})

test('rounded-t-none namespace', () => {
  expect(apply("rounded-t-none")).toEqual({ borderTopLeftRadius: 0, borderTopRightRadius: 0 })
})

test('rounded-r-none namespace', () => {
  expect(apply("rounded-r-none")).toEqual({ borderTopRightRadius: 0, borderBottomRightRadius: 0 })
})

test('rounded-b-none namespace', () => {
  expect(apply("rounded-b-none")).toEqual({ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 })
})

test('rounded-l-none namespace', () => {
  expect(apply("rounded-l-none")).toEqual({ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 })
})

test('rounded-t-sm namespace', () => {
  expect(apply("rounded-t-sm")).toEqual({ borderTopLeftRadius: 2, borderTopRightRadius: 2 })
})

test('rounded-r-sm namespace', () => {
  expect(apply("rounded-r-sm")).toEqual({ borderTopRightRadius: 2, borderBottomRightRadius: 2 })
})

test('rounded-b-sm namespace', () => {
  expect(apply("rounded-b-sm")).toEqual({ borderBottomRightRadius: 2, borderBottomLeftRadius: 2 })
})

test('rounded-l-sm namespace', () => {
  expect(apply("rounded-l-sm")).toEqual({ borderTopLeftRadius: 2, borderBottomLeftRadius: 2 })
})

test('rounded-t namespace', () => {
  expect(apply("rounded-t")).toEqual({ borderTopLeftRadius: 4, borderTopRightRadius: 4 })
})

test('rounded-r namespace', () => {
  expect(apply("rounded-r")).toEqual({ borderTopRightRadius: 4, borderBottomRightRadius: 4 })
})

test('rounded-b namespace', () => {
  expect(apply("rounded-b")).toEqual({ borderBottomRightRadius: 4, borderBottomLeftRadius: 4 })
})

test('rounded-l namespace', () => {
  expect(apply("rounded-l")).toEqual({ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 })
})

test('rounded-t-md namespace', () => {
  expect(apply("rounded-t-md")).toEqual({ borderTopLeftRadius: 6, borderTopRightRadius: 6 })
})

test('rounded-r-md namespace', () => {
  expect(apply("rounded-r-md")).toEqual({ borderTopRightRadius: 6, borderBottomRightRadius: 6 })
})

test('rounded-b-md namespace', () => {
  expect(apply("rounded-b-md")).toEqual({ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 })
})

test('rounded-l-md namespace', () => {
  expect(apply("rounded-l-md")).toEqual({ borderTopLeftRadius: 6, borderBottomLeftRadius: 6 })
})

test('rounded-t-lg namespace', () => {
  expect(apply("rounded-t-lg")).toEqual({ borderTopLeftRadius: 8, borderTopRightRadius: 8 })
})

test('rounded-r-lg namespace', () => {
  expect(apply("rounded-r-lg")).toEqual({ borderTopRightRadius: 8, borderBottomRightRadius: 8 })
})

test('rounded-b-lg namespace', () => {
  expect(apply("rounded-b-lg")).toEqual({ borderBottomRightRadius: 8, borderBottomLeftRadius: 8 })
})

test('rounded-l-lg namespace', () => {
  expect(apply("rounded-l-lg")).toEqual({ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 })
})

test('rounded-t-full namespace', () => {
  expect(apply("rounded-t-full")).toEqual({ borderTopLeftRadius: 9999, borderTopRightRadius: 9999 })
})

test('rounded-r-full namespace', () => {
  expect(apply("rounded-r-full")).toEqual({ borderTopRightRadius: 9999, borderBottomRightRadius: 9999 })
})

test('rounded-b-full namespace', () => {
  expect(apply("rounded-b-full")).toEqual({ borderBottomRightRadius: 9999, borderBottomLeftRadius: 9999 })
})

test('rounded-l-full namespace', () => {
  expect(apply("rounded-l-full")).toEqual({ borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 })
})

test('rounded-tl-none namespace', () => {
  expect(apply("rounded-tl-none")).toEqual({ borderTopLeftRadius: 0 })
})

test('rounded-tr-none namespace', () => {
  expect(apply("rounded-tr-none")).toEqual({ borderTopRightRadius: 0 })
})

test('rounded-br-none namespace', () => {
  expect(apply("rounded-br-none")).toEqual({ borderBottomRightRadius: 0 })
})

test('rounded-bl-none namespace', () => {
  expect(apply("rounded-bl-none")).toEqual({ borderBottomLeftRadius: 0 })
})

test('rounded-tl-sm namespace', () => {
  expect(apply("rounded-tl-sm")).toEqual({ borderTopLeftRadius: 2 })
})

test('rounded-tr-sm namespace', () => {
  expect(apply("rounded-tr-sm")).toEqual({ borderTopRightRadius: 2 })
})

test('rounded-br-sm namespace', () => {
  expect(apply("rounded-br-sm")).toEqual({ borderBottomRightRadius: 2 })
})

test('rounded-bl-sm namespace', () => {
  expect(apply("rounded-bl-sm")).toEqual({ borderBottomLeftRadius: 2 })
})

test('rounded-tl namespace', () => {
  expect(apply("rounded-tl")).toEqual({ borderTopLeftRadius: 4 })
})

test('rounded-tr namespace', () => {
  expect(apply("rounded-tr")).toEqual({ borderTopRightRadius: 4 })
})

test('rounded-br namespace', () => {
  expect(apply("rounded-br")).toEqual({ borderBottomRightRadius: 4 })
})

test('rounded-bl namespace', () => {
  expect(apply("rounded-bl")).toEqual({ borderBottomLeftRadius: 4 })
})

test('rounded-tl-md namespace', () => {
  expect(apply("rounded-tl-md")).toEqual({ borderTopLeftRadius: 6 })
})

test('rounded-tr-md namespace', () => {
  expect(apply("rounded-tr-md")).toEqual({ borderTopRightRadius: 6 })
})

test('rounded-br-md namespace', () => {
  expect(apply("rounded-br-md")).toEqual({ borderBottomRightRadius: 6 })
})

test('rounded-bl-md namespace', () => {
  expect(apply("rounded-bl-md")).toEqual({ borderBottomLeftRadius: 6 })
})

test('rounded-tl-lg namespace', () => {
  expect(apply("rounded-tl-lg")).toEqual({ borderTopLeftRadius: 8 })
})

test('rounded-tr-lg namespace', () => {
  expect(apply("rounded-tr-lg")).toEqual({ borderTopRightRadius: 8 })
})

test('rounded-br-lg namespace', () => {
  expect(apply("rounded-br-lg")).toEqual({ borderBottomRightRadius: 8 })
})

test('rounded-bl-lg namespace', () => {
  expect(apply("rounded-bl-lg")).toEqual({ borderBottomLeftRadius: 8 })
})

test('rounded-tl-full namespace', () => {
  expect(apply("rounded-tl-full")).toEqual({ borderTopLeftRadius: 9999 })
})

test('rounded-tr-full namespace', () => {
  expect(apply("rounded-tr-full")).toEqual({ borderTopRightRadius: 9999 })
})

test('rounded-br-full namespace', () => {
  expect(apply("rounded-br-full")).toEqual({ borderBottomRightRadius: 9999 })
})

test('rounded-bl-full namespace', () => {
  expect(apply("rounded-bl-full")).toEqual({ borderBottomLeftRadius: 9999 })
})
