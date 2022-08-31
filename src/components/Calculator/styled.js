import styled from 'styled-components'

export const CalculatorComponent = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 85% 1fr;
  grid-auto-rows: 1fr 7fr;
  gap: ${({ theme }) => theme.spaces[3]}px;

  .history {
    grid-column: ${({ isVisible }) => isVisible ? '2 / 4' : ''};
    grid-row: ${({ isVisible }) => isVisible ? '1 / 3' : ''};
    border-left: 2px solid ${({ theme }) => theme.colors.grey};
    padding: ${({ theme }) => theme.spaces[2]}px;
    color: ${({ theme }) => theme.title};
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces[2]}px;
    .title {
      text-align: center;
    }
    .expressions {
      overflow-y: scroll;
      height: 75vh;
      display: flex;
      flex-direction: column;
      row-gap: ${({ theme }) => theme.spaces[1]}px;

      ::-webkit-scrollbar {
        width: ${({ theme }) => theme.spaces[1]}px;
        background-color: ${({ theme }) => theme.body};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.grey};
        border-radius: 9em;
      }
    }
    .expression {
      font-size: x-large;
    }
  }

  .none {
    display: none;
  }

  .display {
    grid-column: ${({ isVisible }) => isVisible ? '' : '1 / 4'};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
    padding-right: ${({ theme }) => theme.spaces[4]}px;
    font-size: xx-large;
    outline: none;
    text-align: right;
    &::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`
