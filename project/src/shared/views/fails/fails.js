// @flow
import React, { Component } from "react"
import type { TypeB } from "@project/components/comp-b/types"

type Props = {
  someValue?: number | string,
  typeBs: Array<TypeB>,
}

type State = {}

function someFunction(typeBs) {
  const operated = typeBs.reduce(function(running, typeB) {
    const localKeyed = typeB.someArray.reduce(function(
      running,
      next
    ) {
      const uniqueKey = next.id
      return [...running, { [uniqueKey]: next }]
    },
    [])
    return [...running, ...localKeyed]
  }, [])
  return operated
}

class PaymentSummary extends Component<Props, State> {
  handler = () => {
    const { typeBs, someValue } = this.props
    if (!someValue) {
      return
    }
    const operated = someFunction(typeBs)
    const someResult = operated.find(function(item) {
      return Boolean(item[String(someValue)])
    })
    console.log(someResult) // eslint-disable-line;
  }

  render() {
    return (
      <div onClick={this.handler} />
    )
  }
}

export default PaymentSummary
