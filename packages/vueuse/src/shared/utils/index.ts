export * from './types'
export * from './is'

export function promiseTimeout(
  ms: number,
  throwOnTimeout = false,
  reason = 'Timeout'
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout) setTimeout(() => reject(reason), ms)
    else setTimeout(resolve, ms)
  })
}

export function containsProp(obj: object, ...props: string[]) {
  return props.some((k) => k in obj)
}
