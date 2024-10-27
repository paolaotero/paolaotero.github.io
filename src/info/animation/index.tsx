import { Card, Img, Title, Text } from "../styles";
import Video from "../../assets/images/animacion/video.mp4";
import ManoGif from "../../assets/images/animacion/manogif.gif";
import ManoGifMulti from "../../assets/images/animacion/cuadricula.png";
import Ondas from "../../assets/images/animacion/ondas.gif";
import { Container } from "./styles";

export function Animation() {
  const images = [
    {
      key: "1",
      title: "Maniac",
      image: Video,
      description:
        "desarrollo de opening alternativa para la miniserie Maniac, de Netflix. 2022.",
    },
    /* {
      key: "2",
      title: "2001 - rotoscopia",
      image: LiteraryConflicts,
    }, */
    /* {
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
  ];

  const video = images[0];

  return (
    <Container id="animation">
      <Card>
        <video width="750" height="500" controls>
          <source src={video.image} type="video/mp4" />
        </video>
        <Title>{video.title}</Title>
        <Text>{video.description}</Text>{" "}
      </Card>

      {[...images.slice(1)].map((op) => (
        <Card key={op.key}>
          <Img src={op.image} />
          {op.title ? <Title>{op.title}</Title> : null}
          {op.description ? <Text>{op.description}</Text> : null}
        </Card>
      ))}
    </Container>
  );
}
