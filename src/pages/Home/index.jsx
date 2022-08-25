import React from 'react'

import { PageLayout } from '@/layouts/styled'
import Calculator from '@/components/Calculator'
import ErrorBoundary from '@/components/ErrorBoundary'

const HomePage = () => {
  return (
    <PageLayout>
      <ErrorBoundary>
        <Calculator />
      </ErrorBoundary>
    </PageLayout>
  )
}

export default HomePage
