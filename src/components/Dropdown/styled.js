import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 25%;
  user-select: none;
`

export const ButtonHeader = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: .6em 1.4em .5em .8em;
  justify-content: space-between;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.spaces[1]}px;
  background-color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.notActive}
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.white}
  }
`

export const Selecting = styled.div`
  margin-right: ${({ theme }) => theme.spaces[4]}px;
  font-weight: 300;
`

export const List = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-top: none;
  border-bottom-left-radius: ${({ theme }) => theme.spaces[1]}px;
  border-bottom-right-radius: ${({ theme }) => theme.spaces[1]}px;
`

export const ListItem = styled.button`
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  padding: .6em 1.4em .5em .8em;
  text-align: left;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    & > span > svg > path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`
export const Labeling = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.title};
  padding-top: ${({ theme }) => theme.spaces[1]}px;
`

