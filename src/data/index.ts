import type { Lang, Messages } from './types'
import { pt } from './pt'
import { en } from './en'

export const messages: Record<Lang, Messages> = { pt, en }

export type * from './types'
export { site } from './site'
