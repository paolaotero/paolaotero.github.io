import styled from "styled-components";
import { font } from "../styles/tokens";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Container = styled.div`
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
  display: flex;
  margin: auto;
`;

export const Title = styled.div`
  font-size: ${font.fn020};
`;

export const Text = styled.div`
  font-size: ${font.fn014};
`;


export const GroupedImages = styled.div<{
  direction: "column" | "row";
}>`
  display: grid;
  grid-gap: 2rem;

  ${({ direction }) => {
    switch (direction) {
      case "column":
        return `grid-template-columns: 1fr 1fr;`;
      case "row":
        return `grid-template-rows: 1fr 1fr;`;
    }
  }}
`;

export const ImgContainer = styled.div<{ layout: "grid" | "scroll" | "column" }>`
  ${({ layout }) => {
    switch (layout) {
      case "grid":
        return `
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;

          ${Img} {
            height: 100%;
            min-width: 290px;
            width: 100%;
          }
        `;
      case "scroll":
        return `
          display: flex;
          flex-wrap: no-wrap;
          overflow-x: auto;

          ${Img} {
          flex: 0 0 auto;
           width: auto;
           height: 400px;
           max-width: 100%;
           margin-right: 1rem;
          }
        `;
      case "column":
        return `
          display: flex;
          flex-direction: column;
          gap: 2rem;
          ${Img} {
            margin: auto;
            max-height: 350px;
            min-height: 350px;
            height: 100%;
          }
        `;
    }
  }}
`;
