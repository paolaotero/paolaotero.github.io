import { Card, Img, ImgContainer, Title, Text, GroupedImages } from "../styles";
import Banshees from "../../assets/images/carteles/banshees.jpg";
import Banshees2 from "../../assets/images/carteles/banshees2.jpg";
import End from "../../assets/images/carteles/end.jpg";
import Heaven from "../../assets/images/carteles/heaven1.jpg";
import Querer from "../../assets/images/carteles/querer.jpg";
import Karmadame from "../../assets/images/carteles/karmadame1azul.jpg";
import When from "../../assets/images/carteles/when1.jpg";
import Venus from "../../assets/images/carteles/venus.jpg";
import Lovesong from "../../assets/images/carteles/lovesong2.png";
import Lovesong2 from "../../assets/images/carteles/lovesong3.png";
import PinkRabbits from "../../assets/images/carteles/pinkrabbits.jpg";

export function Posters() {
  const images = [
    Banshees,
    Banshees2,
    End,
    Heaven,
    Karmadame,
    Querer,
    When,
    PinkRabbits,
    Venus,
    Lovesong,
    Lovesong2,
  ];

  return (
    <div>
      <Card id="carteleria">
        <ImgContainer layout="grid">
          {[...images.slice(0, 2)].map((img) => (
            <Img src={img} />
          ))}
        </ImgContainer>

        <Title>2023-2024</Title>

        <Text>
          colección personal de múltiples carteles experimentando con distintas
          formas de composición, edición, y tipografías; realizado a modo de
          reto personal de transmitir las sensaciones y sentimientos que
          manejaba diariamente, buscando una narrativa individual en cada uno,
          pero manteniendo una identidad visual distinguible.
        </Text>

        <ImgContainer layout="grid">
          {[...images.slice(2, -2)].map((img) => (
            <Img src={img} />
          ))}

          <GroupedImages direction="row">
            {[...images.slice(9, 11)].map((img) => (
              <Img src={img} />
            ))}
          </GroupedImages>
        </ImgContainer>
      </Card>
    </div>
  );
}
