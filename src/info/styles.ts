import styled from "styled-components";
import { font } from "../styles/tokens";

export const Container = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: flex;
`;

export const Title = styled.div`
  font-size: ${font.fn020};
`;

export const Text = styled.div`
  font-size: ${font.fn014};
`;
