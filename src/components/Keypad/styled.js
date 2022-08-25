import styled from 'styled-components'

export const Button = styled.button`
  width: ${({ theme }) => theme.spaces[5]}px;
  height: ${({ theme }) => theme.spaces[5]}px;
  font-size: x-large;
  border-radius: 0.5em;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.notActive}
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.white}
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  .equal {
    grid-column: 2 / 6;
    width: calc(100% - 3 * ${({ theme }) => theme.spaces[5]}px);
  }
`
