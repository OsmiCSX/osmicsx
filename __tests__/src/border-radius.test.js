import borderRadius from "../../src/border-radius";

test('rounded-none namespace', () => {
  expect(borderRadius['rounded-none']).toEqual({ borderRadius: 0 })
})

test('rounded-sm namespace', () => {
  expect(borderRadius['rounded-sm']).toEqual({ borderRadius: 2 })
})

test('rounded namespace', () => {
  expect(borderRadius['rounded']).toEqual({ borderRadius: 4 })
})

test('rounded-md namespace', () => {
  expect(borderRadius['rounded-md']).toEqual({ borderRadius: 6 })
})

test('rounded-lg namespace', () => {
  expect(borderRadius['rounded-lg']).toEqual({ borderRadius: 8 })
})

test('rounded-full namespace', () => {
  expect(borderRadius['rounded-full']).toEqual({ borderRadius: 9999 })
})

test('rounded-t-none namespace', () => {
  expect(borderRadius["rounded-t-none"]).toEqual({ borderTopLeftRadius: 0, borderTopRightRadius: 0 })
})

test('rounded-r-none namespace', () => {
  expect(borderRadius["rounded-r-none"]).toEqual({ borderTopRightRadius: 0, borderBottomRightRadius: 0 })
})

test('rounded-b-none namespace', () => {
  expect(borderRadius["rounded-b-none"]).toEqual({ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 })
})

test('rounded-l-none namespace', () => {
  expect(borderRadius["rounded-l-none"]).toEqual({ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 })
})

test('rounded-t-sm namespace', () => {
  expect(borderRadius["rounded-t-sm"]).toEqual({ borderTopLeftRadius: 2, borderTopRightRadius: 2 })
})

test('rounded-r-sm namespace', () => {
  expect(borderRadius["rounded-r-sm"]).toEqual({ borderTopRightRadius: 2, borderBottomRightRadius: 2 })
})

test('rounded-b-sm namespace', () => {
  expect(borderRadius["rounded-b-sm"]).toEqual({ borderBottomRightRadius: 2, borderBottomLeftRadius: 2 })
})

test('rounded-l-sm namespace', () => {
  expect(borderRadius["rounded-l-sm"]).toEqual({ borderTopLeftRadius: 2, borderBottomLeftRadius: 2 })
})

test('rounded-t namespace', () => {
  expect(borderRadius["rounded-t"]).toEqual({ borderTopLeftRadius: 4, borderTopRightRadius: 4 })
})

test('rounded-r namespace', () => {
  expect(borderRadius["rounded-r"]).toEqual({ borderTopRightRadius: 4, borderBottomRightRadius: 4 })
})

test('rounded-b namespace', () => {
  expect(borderRadius["rounded-b"]).toEqual({ borderBottomRightRadius: 4, borderBottomLeftRadius: 4 })
})

test('rounded-l namespace', () => {
  expect(borderRadius["rounded-l"]).toEqual({ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 })
})

test('rounded-t-md namespace', () => {
  expect(borderRadius["rounded-t-md"]).toEqual({ borderTopLeftRadius: 6, borderTopRightRadius: 6 })
})

test('rounded-r-md namespace', () => {
  expect(borderRadius["rounded-r-md"]).toEqual({ borderTopRightRadius: 6, borderBottomRightRadius: 6 })
})

test('rounded-b-md namespace', () => {
  expect(borderRadius["rounded-b-md"]).toEqual({ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 })
})

test('rounded-l-md namespace', () => {
  expect(borderRadius["rounded-l-md"]).toEqual({ borderTopLeftRadius: 6, borderBottomLeftRadius: 6 })
})

test('rounded-t-lg namespace', () => {
  expect(borderRadius["rounded-t-lg"]).toEqual({ borderTopLeftRadius: 8, borderTopRightRadius: 8 })
})

test('rounded-r-lg namespace', () => {
  expect(borderRadius["rounded-r-lg"]).toEqual({ borderTopRightRadius: 8, borderBottomRightRadius: 8 })
})

test('rounded-b-lg namespace', () => {
  expect(borderRadius["rounded-b-lg"]).toEqual({ borderBottomRightRadius: 8, borderBottomLeftRadius: 8 })
})

test('rounded-l-lg namespace', () => {
  expect(borderRadius["rounded-l-lg"]).toEqual({ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 })
})

test('rounded-t-full namespace', () => {
  expect(borderRadius["rounded-t-full"]).toEqual({ borderTopLeftRadius: 9999, borderTopRightRadius: 9999 })
})

test('rounded-r-full namespace', () => {
  expect(borderRadius["rounded-r-full"]).toEqual({ borderTopRightRadius: 9999, borderBottomRightRadius: 9999 })
})

test('rounded-b-full namespace', () => {
  expect(borderRadius["rounded-b-full"]).toEqual({ borderBottomRightRadius: 9999, borderBottomLeftRadius: 9999 })
})

test('rounded-l-full namespace', () => {
  expect(borderRadius["rounded-l-full"]).toEqual({ borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 })
})

test('rounded-tl-none namespace', () => {
  expect(borderRadius["rounded-tl-none"]).toEqual({ borderTopLeftRadius: 0 })
})

test('rounded-tr-none namespace', () => {
  expect(borderRadius["rounded-tr-none"]).toEqual({ borderTopRightRadius: 0 })
})

test('rounded-br-none namespace', () => {
  expect(borderRadius["rounded-br-none"]).toEqual({ borderBottomRightRadius: 0 })
})

test('rounded-bl-none namespace', () => {
  expect(borderRadius["rounded-bl-none"]).toEqual({ borderBottomLeftRadius: 0 })
})

test('rounded-tl-sm namespace', () => {
  expect(borderRadius["rounded-tl-sm"]).toEqual({ borderTopLeftRadius: 2 })
})

test('rounded-tr-sm namespace', () => {
  expect(borderRadius["rounded-tr-sm"]).toEqual({ borderTopRightRadius: 2 })
})

test('rounded-br-sm namespace', () => {
  expect(borderRadius["rounded-br-sm"]).toEqual({ borderBottomRightRadius: 2 })
})

test('rounded-bl-sm namespace', () => {
  expect(borderRadius["rounded-bl-sm"]).toEqual({ borderBottomLeftRadius: 2 })
})

test('rounded-tl namespace', () => {
  expect(borderRadius["rounded-tl"]).toEqual({ borderTopLeftRadius: 4 })
})

test('rounded-tr namespace', () => {
  expect(borderRadius["rounded-tr"]).toEqual({ borderTopRightRadius: 4 })
})

test('rounded-br namespace', () => {
  expect(borderRadius["rounded-br"]).toEqual({ borderBottomRightRadius: 4 })
})

test('rounded-bl namespace', () => {
  expect(borderRadius["rounded-bl"]).toEqual({ borderBottomLeftRadius: 4 })
})

test('rounded-tl-md namespace', () => {
  expect(borderRadius["rounded-tl-md"]).toEqual({ borderTopLeftRadius: 6 })
})

test('rounded-tr-md namespace', () => {
  expect(borderRadius["rounded-tr-md"]).toEqual({ borderTopRightRadius: 6 })
})

test('rounded-br-md namespace', () => {
  expect(borderRadius["rounded-br-md"]).toEqual({ borderBottomRightRadius: 6 })
})

test('rounded-bl-md namespace', () => {
  expect(borderRadius["rounded-bl-md"]).toEqual({ borderBottomLeftRadius: 6 })
})

test('rounded-tl-lg namespace', () => {
  expect(borderRadius["rounded-tl-lg"]).toEqual({ borderTopLeftRadius: 8 })
})

test('rounded-tr-lg namespace', () => {
  expect(borderRadius["rounded-tr-lg"]).toEqual({ borderTopRightRadius: 8 })
})

test('rounded-br-lg namespace', () => {
  expect(borderRadius["rounded-br-lg"]).toEqual({ borderBottomRightRadius: 8 })
})

test('rounded-bl-lg namespace', () => {
  expect(borderRadius["rounded-bl-lg"]).toEqual({ borderBottomLeftRadius: 8 })
})

test('rounded-tl-full namespace', () => {
  expect(borderRadius["rounded-tl-full"]).toEqual({ borderTopLeftRadius: 9999 })
})

test('rounded-tr-full namespace', () => {
  expect(borderRadius["rounded-tr-full"]).toEqual({ borderTopRightRadius: 9999 })
})

test('rounded-br-full namespace', () => {
  expect(borderRadius["rounded-br-full"]).toEqual({ borderBottomRightRadius: 9999 })
})

test('rounded-bl-full namespace', () => {
  expect(borderRadius["rounded-bl-full"]).toEqual({ borderBottomLeftRadius: 9999 })
})
