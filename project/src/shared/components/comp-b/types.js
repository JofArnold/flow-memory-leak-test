// @flow

import type { TypeA } from "@project/components/comp-a/types"

type TypeB = {
  someArray: Array<TypeA>,
}

export type { TypeB }
