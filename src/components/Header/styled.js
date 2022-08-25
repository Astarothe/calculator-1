import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${({ theme }) => theme.spaces[4]}px;
  .shrink {
    flex-shrink: 1;
  }
`

export const Heder = styled.header`
  width: 100%;
  height: 10vh;
  color: ${({ theme }) => theme.colors.notActive};
  text-decoration: none;
`
export const Logo = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  column-gap: ${({ theme }) => theme.spaces[4]}px;
  list-style-type: none;

  .list_item {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.notActive};
    text-decoration: none;
    &::after {
      content: '';
      width: 0px;
      height: 2px;
      display: block;
      background: ${({ theme }) => theme.colors.white};
      transition: 300ms;
    }
    &:hover::after {
      width: 100%;
    }
    &.selected {
      color: ${({ theme }) => theme.colors.white};
      &::after {
        width: 100%;
      }
    }
  }
`
