import React, { PureComponent } from 'react'

import { PageLayout } from '@/layouts/styled'
import CalculatorCC from '@/components/Calculator/Calculator'
import ErrorBoundary from '@/components/ErrorBoundary'

export default class HomePage extends PureComponent {
  render () {
    return (
      <PageLayout>
        <ErrorBoundary>
          <CalculatorCC />
        </ErrorBoundary>
      </PageLayout>
    )
  }
}
