import Styled from "styled-components";

export const BaseButton = Styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 999px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
