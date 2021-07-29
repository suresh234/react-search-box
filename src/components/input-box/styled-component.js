import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: ${props => props.inputBoxFontSize};
  height: ${props => props.inputBoxHeight};
  border: 1px solid ${props => props.inputBoxBorderColor};
  color: ${props => props.inputBoxFontColor};
  background-color: ${props => props.inputBoxBackgroundColor};

  &:focus {
    outline: none;
  }
`

export default StyledInput
