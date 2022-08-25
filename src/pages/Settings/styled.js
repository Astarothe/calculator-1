import styled from 'styled-components'

export const ClearButton = styled.button`
  display: block;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 25%;
  max-width: 25%;
  margin: ${({ theme }) => theme.spaces[3]}px 0 0;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: .25em;
  text-align: left;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.notActive}
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.white}
  }
`

export const Heading = styled.h1`
  font-weight: normal;
  font-size: 3em;
  color: ${({ theme }) => theme.title}
`
