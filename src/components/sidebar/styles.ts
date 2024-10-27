import styled from "styled-components";
import { colors, spacing } from "../../styles/tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sp024};
`;

export const Option = styled.div`
  cursor: pointer;
  position: relative;
  width: fit-content;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all .3s ease-in-out;
  }
  
  &:hover::before {
    background-color: ${colors.blue};
    left: .8rem;
    bottom: -.4rem;
    height: ${spacing.sp024};
    width: calc(100% + 10px);
  } 
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;