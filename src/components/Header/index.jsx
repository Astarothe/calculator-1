import React from 'react'
import { NavLink } from 'react-router-dom'

import { HOME_PAGE_ROUTE, routes } from '@/constants'
import { Heder, Navigation, UnorderedList, Logo } from './styled'

const HeaderComponent = () => {
  return (
    <Heder id="header">
      <Navigation>
        <Logo to={HOME_PAGE_ROUTE} id="logo">Calculator App</Logo>
        <div className="shrink" />
        <UnorderedList id="unordered_list">
          {routes.map(({ name, path, id }) => (
            <li key={id}>
              <NavLink className={(navData) => navData.isActive ? "list_item selected" : "list_item"} to={path}>
                {name}
              </NavLink>
            </li>
            ))}
        </UnorderedList>
      </Navigation>
    </Heder>
  )
}

export default HeaderComponent
