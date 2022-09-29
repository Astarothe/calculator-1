import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Load from '@/components/Loader'
import HeaderComponent from '@/components/Header'
import { HOME_PAGE_ROUTE, HOME_PAGE_CC_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/router'


const HomePage = lazy(() => import('@/pages/Home'))
const HomePageCC = lazy(() => import('@/pages/HomeCC'))
const SettingsPage = lazy(() => import('@/pages/Settings'))


const Application = () => (
  <Suspense fallback={<Load />}>
    <HeaderComponent />
     <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={HOME_PAGE_CC_ROUTE} element={<HomePageCC />} />
      <Route path={SETTINGS_PAGE_ROUTE} element={<SettingsPage />} />
      <Route path="*" element={<HomePage />} />
     </Routes>
  </Suspense>
)

export default Application
