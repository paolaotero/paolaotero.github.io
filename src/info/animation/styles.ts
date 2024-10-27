import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const IFrameContainer = styled.div`
  display: flex;
  justify-content: center;

  iframe {
    aspect-ratio: 16 / 9;
    width: 100% !important;
  }
`;