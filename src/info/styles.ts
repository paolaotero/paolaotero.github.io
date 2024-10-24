import styled from "styled-components";
import { font } from "../styles/tokens";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

export const Img = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
  max-height: 477px;
  max-width: 294px;
  display: flex;
  margin: auto;
`;

export const Title = styled.div`
  font-size: ${font.fn020};
`;

export const Text = styled.div`
  font-size: ${font.fn014};
`;

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;
