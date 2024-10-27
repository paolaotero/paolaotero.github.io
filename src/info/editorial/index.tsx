import { Card, Img, ImgContainer, Title, Text } from "../styles";
import LiteraryConflicts from "../../assets/images/fanzines/manvself1.jpg";
import LiteraryConflicts2 from "../../assets/images/fanzines/manvself2.jpg";
import LiteraryConflicts3 from "../../assets/images/fanzines/manvself3.jpg";
import LiteraryConflicts4 from "../../assets/images/fanzines/manvself4.jpg";
import LiteraryConflicts5 from "../../assets/images/fanzines/manvself5.jpg";
import LiteraryConflicts6 from "../../assets/images/fanzines/manvself6.jpg";
import LiteraryConflicts7 from "../../assets/images/fanzines/manvself7.jpg";
import LiteraryConflicts8 from "../../assets/images/fanzines/manvself8.jpg";
import LiteraryConflicts9 from "../../assets/images/fanzines/manvself9.jpg";
import Naranja from "../../assets/images/fanzine 3/IMG_0003.jpg";
import Naranja2 from "../../assets/images/fanzine 3/IMG_0004.jpg";
import Naranja3 from "../../assets/images/fanzine 3/IMG_0005.jpg";
import Naranja4 from "../../assets/images/fanzine 3/IMG_0006.jpg";
import Naranja5 from "../../assets/images/fanzine 3/IMG_0007.jpg";
import Naranja6 from "../../assets/images/fanzine 3/IMG_0008.jpg";
import Untitled from "../../assets/images/fanzine 2/IMG_0001.jpg";
import Untitled2 from "../../assets/images/fanzine 2/IMG_0002.jpg";
import Untitled3 from "../../assets/images/fanzine 2/IMG_0003.jpg";
import Untitled4 from "../../assets/images/fanzine 2/IMG_0004.jpg";
import Untitled5 from "../../assets/images/fanzine 2/IMG_0005.jpg";
import Advertencia from "../../assets/images/folleto 1/advertencia1.jpg";
import Advertencia2 from "../../assets/images/folleto 1/advertencia2.jpg";
import Advertencia3 from "../../assets/images/folleto 1/advertencia3.jpg";
import Advertencia4 from "../../assets/images/folleto 1/emergencia1.jpg";
import Advertencia5 from "../../assets/images/folleto 1/emergencia2.jpg";
import Advertencia6 from "../../assets/images/folleto 1/emergencia3.jpg";
import Advertencia7 from "../../assets/images/folleto 1/folletos.jpg";
import Advertencia8 from "../../assets/images/folleto 1/vudu1.jpeg";
import Advertencia9 from "../../assets/images/folleto 1/vudu3.jpeg";
import { Container } from "./styles";

export function Editorial() {
  const options = [
    {
      key: "diseño-editorial",
      title: "literary conflicts",
      layout: "grid",
      images: [
        LiteraryConflicts,
        LiteraryConflicts2,
        LiteraryConflicts3,
        LiteraryConflicts4,
        LiteraryConflicts5,
        LiteraryConflicts6,
        LiteraryConflicts7,
        LiteraryConflicts8,
        LiteraryConflicts9,
      ],
      description:
        "proyecto editorial autoeditado, esta trilogía de fanzines está inspirada directamente en los conflictos literarios clásicos: el hombre contra sí mismo, el hombre contra dios, y el hombre contra los otros. relata la lucha que tiene el personaje consigo mismo, la mortalidad y sus vínculos con las demás personas; narrado con un enfoque personal a través de texto e ilustraciones donde yo misma cuento, vivo, e ilustro mi lucha conmigo misma en un período de crecimiento y desasosiego. impreso en A6, en papel reciclado de 90gr, grapado. 2023.",
    },
    {
      key: "naranja",
      title: "naranja",
      layout: "grid",
      images: [Naranja, Naranja2, Naranja3, Naranja4, Naranja5, Naranja6],
      description:
        "fanzine ilustrado representando desde la metáfora de ilustrar una naranja, una fruta hecha para ser compartida, el sentimiento de tener una cantidad inmensa de amor para dar, pero no tener ningún lugar dónde depositarlo. A6, papel de 90gr. 2023.",
    },
    {
      key: "untitled",
      title: "untitled",
      layout: "grid",
      images: [Untitled, Untitled2, Untitled3, Untitled4, Untitled5],
      description:
        "fanzine ilustrando la sensación al besar a alguien que amas por primera vez. A6, papel de 90gr. 2023.",
    },
    {
      key: "campaña-anti-manspreading",
      title: "campaña anti-manspreading",
      layout: "grid",
      images: [
        Advertencia,
        Advertencia2,
        Advertencia3,
        Advertencia4,
        Advertencia5,
        Advertencia6,
        Advertencia7,
        Advertencia8,
        Advertencia9,
      ],
      description:
        "folletos informativos manejados desde el humor y la ironía a modo de ser parte de un proyecto de concientización social para reducir y posteriormente eliminar el problema del fenómeno de manspreading en el metro de Madrid. con folletos dirigidos hacia hombres y mujeres, y a través de una mascota siendo un muñeco vudú, se trae consciencia y atención hacia un problema tan común en el transporte público. 2023.",
    },
  ];

  return (
    <Container id="diseño-editorial">
      {options.map((op) => (
        <Card id="diseño-editorial">
          <ImgContainer layout="scroll">
            {op.images.map((img) => (
              <Img src={img} />
            ))}
          </ImgContainer>

          <Title>{op.title}</Title>

          <Text>{op.description}</Text>
        </Card>
      ))}
    </Container>
  );
}
