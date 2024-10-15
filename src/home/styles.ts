import styled from "styled-components";
import { spacing } from "../styles/tokens";

export const Container = styled.header`
  margin: ${spacing.sp064} ${spacing.sp064} 0 ${spacing.sp064};
  display: flex;
  gap: 2rem;
  height: 75vh; // Cuadrar en funcion de alto del header
`;