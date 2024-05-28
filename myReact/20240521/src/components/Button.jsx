import styled, { keyframes } from "styled-components";

const enlarge = keyframes`
from {
 transform: scale(1);
}
to {
 transform: scale(1.1);
}
`;

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primary ? "rgb(252, 158, 36)" : "white"};
  color: ${(props) => (props.primary ? "white" : "rgb(252, 158, 36)")};
  border: ${(props) =>
    props.primary ? "none" : "1px solid rgb(252, 158, 36)"};
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 3px;
  margin: 5px;
  &:hover {
    animation: ${enlarge} 0.1s linear forwards;
  }
`;

export function Button({ buttonText, clickFunction, primary }) {
  return (
    <StyledButton onClick={clickFunction} primary={primary}>
      {buttonText}
    </StyledButton>
  );
}
