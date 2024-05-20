import styled, { keyframes } from "styled-components";

export function Button({ type, text, clickEvent, smallerButton }) {
  const enlarge = keyframes`
 from {
  transform: scale(1);
 }
 to {
  transform: scale(1.1);

 }
 `;

  const MyButton = styled.button`
    padding: 5px;
    height: 25px;
    border: none;
    margin: ${(props) => (props.smallerButton ? "10px" : "0px")};
    border-radius: 3px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

    &:hover {
      background-color: rgb(7, 63, 43);
      color: white;
      animation: ${enlarge} 0.2s linear forwards;
    }
  `;

  return (
    <MyButton smallerButton={smallerButton} type={type} onClick={clickEvent}>
      {text}
    </MyButton>
  );
}
