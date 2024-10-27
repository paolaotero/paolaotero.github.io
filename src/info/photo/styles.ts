import styled from "styled-components";
import { colors } from "../../styles/tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Link = styled.a`
  font-size: 48px;
  color: ${colors.black};
  text-decoration: none;
  margin: 30px 0;
`;
