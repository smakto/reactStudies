import styled, { keyframes } from "styled-components";
import { useThemeContext } from "../contexts/ThemeContext";

const enlarge = keyframes`
from {
 transform: scale(1);
}
to {
 transform: scale(1.1);
}
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? `${props.colors}` : "white")};
  color: ${(props) => (props.primary ? "white" : `${props.colors}`)};
  border: ${(props) => (props.primary ? "none" : `1px solid ${props.colors}`)};
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 3px;
  margin: 5px;
  &:hover {
    animation: ${enlarge} 0.1s linear forwards;
  }
`;

export function Button({ buttonText, clickFunction, primary }) {
  const myState = useThemeContext();
  return (
    <StyledButton
      onClick={clickFunction}
      primary={primary}
      colors={myState.colorScheme}
    >
      {buttonText}
    </StyledButton>
  );
}
