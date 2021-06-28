export function getProperty({
  name,
  value: v,
}: {
  name: string
  value?: number | string
}) {
  if (v === null || v === undefined) return undefined

  const value = typeof v === 'number' ? `${v}px` : v

  return {
    [`--${name}`]: value,
  }
}
