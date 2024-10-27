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
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    background-color: ${colors.blue};
    left: 0.8rem;
    bottom: -0.4rem;
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

export const Link = styled.a`
  color: ${colors.black};
  text-decoration: none;
`;

export const IconLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const IconContainer = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
`;
