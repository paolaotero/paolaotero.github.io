import { Card, Img, Title, Text } from "../styles";
/* import Video from "../../assets/images/animacion/video.mp4"; */
import ManoGif from "../../assets/images/animacion/manogif.gif";
import ManoGifMulti from "../../assets/images/animacion/cuadricula.png";
import Ondas from "../../assets/images/animacion/ondas.gif";
import Perspectiva from "../../assets/images/animacion/perspectiva_paola otero.gif";

import { Container, IFrameContainer } from "./styles";

export function Animation() {
  const images = [
    {
      key: "1",
      title: "Maniac",
      image: "https://www.youtube.com/embed/1WmKXqwaWj8?si=u3UIv6asC7yeK-Pp",
      description:
        "desarrollo de opening alternativa para la miniserie Maniac, de Netflix. 2022.",
    },
    {
      key: "2",
      title: "2001 - rotoscopia",
      image: "https://www.youtube.com/embed/3_i6W87jwTI?si=6iKd5GS6910rCvie",
    },
    /*     {
      key: "3",
      title: "Você - La Vida Bohème",
      image: LiteraryConflicts,
    }, */
    {
      key: "4",
      image: Ondas,
    },
    {
      key: "5",
      image: ManoGif,
    },
    {
      key: "6",
      image: ManoGifMulti,
    },
    /* {
      key: "7",
      image: LiteraryConflicts,
      description: "colección personal de animaciones frame a frame. 2024.",
    }, */

    {
      key: "8",
      image: Perspectiva,
    },
  ];

  const videos = images.slice(0, 2);

  return (
    <Container id="animation">
      <Card>
        {videos.map((video) => {
          return (
            <>
              <IFrameContainer>
                <iframe src={video.image} title={video.title}></iframe>
              </IFrameContainer>
              <Title>{video.title}</Title>
              <Text>{video.description}</Text>
            </>
          );
        })}
      </Card>

      {[...images.slice(2)].map((op) => (
        <Card key={op.key}>
          <Img src={op.image} />
          {op.title ? <Title>{op.title}</Title> : null}
          {op.description ? <Text>{op.description}</Text> : null}
        </Card>
      ))}
    </Container>
  );
}
