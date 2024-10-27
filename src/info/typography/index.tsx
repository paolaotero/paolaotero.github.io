import { Card, Img, ImgContainer, Title, Text, GroupedImages } from "../styles";
import { Container, Link } from "./styles";

import PixerModular from "../../assets/images/tipografia/pixer-modular.gif";
import TypoOne from "../../assets/images/tipografia/one.jpg";
import TypoTwo from "../../assets/images/tipografia/two.jpg";
import TypoThree from "../../assets/images/tipografia/three.jpg";
import TypoFour from "../../assets/images/tipografia/four.jpg";
import TypoFive from "../../assets/images/tipografia/five.jpg";
import TypoSix from "../../assets/images/tipografia/six.jpg";
import TypoSeven from "../../assets/images/tipografia/seven.jpg";
import TypoEight from "../../assets/images/tipografia/eight.jpg";
import Cartel from "../../assets/images/tipografia/cartel_promocion_paola otero.jpg";

export function Typography() {
  const images = [
    PixerModular,
    TypoOne,
    TypoTwo,
    TypoThree,
    TypoFour,
    TypoFive,
    TypoSix,
    TypoSeven,
    TypoEight,
    Cartel,
  ];

  return (
    <Card id="tipografia">
      <Img src={images[0]} />

      <Title>tipografia</Title>

      <Text>
        desarrollo en Fontlab 8 de una tipografía modular variable. este
        proyecto parte de la idea de general un modelo para tipografías que las
        descomponga en múltiples capas de módulos, para así, posteriormente,
        generar variaciones aleatorias individuales en la posición de cada uno,
        para así generar versiones distintas de cada glifo al azar; pensada para
        arte generativo. como base hace uso de la tipografía Pixer, open source
        por Nikolay Petroussenko para Fontfabric, 2020.
      </Text>

      <ImgContainer layout="column">
        {[...images.slice(1, 7)].map((img) => (
          <Img src={img} />
        ))}

        <Link href="https://pixer-modular.netlify.app/">Link a web</Link>

        <GroupedImages direction="column">
          {[...images.slice(7, 9)].map((img) => (
            <Img src={img} />
          ))}
        </GroupedImages>
      </ImgContainer>

      <Img src={images[9]} />
    </Card>
  );
}
