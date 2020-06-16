export * from './use-swr'
import { default as useSWR } from './use-swr'
export { useSWRPages } from './use-swr-pages'
export { cache, CONCURRENT_PROMISES, CONCURRENT_PROMISES_TS } from './config'
export {
  ConfigInterface,
  revalidateType,
  RevalidateOptionInterface,
  keyInterface,
  responseInterface,
  CacheInterface
} from './types'
export default useSWR
