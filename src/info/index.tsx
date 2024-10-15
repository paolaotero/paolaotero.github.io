import { 
  arial, 
  banshees,
  banshees1,
  banshees2,
  bembo,
  blur,
  bodoni,
  carte_pixel,
  end,
  heaven1,
  heaven2,
  karmadame,
  karmadame_azul,
  love_song2,
  love_song3,
  manogif,
  ondas,
  pick_rabbits,
  pixel_modular,
  querer,
  rockwell,
  telegraf,
  venus,
  when1 } from "../assets/images";
import { Card, Container, Img, Text, Title } from "./styles";

export function Info() {

  const options = [
    {
      key: "diseño-editorial",
      title: "diseño editorial",
      images: [arial],
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "carteleria",
      title: "cartelería",
      images: ['',''],
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "tipografia",
      title: "tipografía",
      images: [''],
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "animacion",
      title: "motion graphics / animación",
      images: [''],
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "identidad",
      title: "identidad",
      images: [''],
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
    {
      key: "fotografia",
      title: "fotografía",
      images: [''],
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati excepturi? Molestiae laborum incidunt unde? Molestias minus incidunt quo error ad quos! Dolores atque, est consequuntur iure veritatis consectetur optio nisi odit.'
    },
  ]

  return (
    <Container>
      {
        options.map((op) =>
        <Card
          id={op.key}>
          
          {op.images.map((img) =>
            <Img src={img} /> 
          )}

          <Title>
            {op.title}
          </Title>

          <Text>
            {op.description}
          </Text>
        </Card>)
      }
    </Container>
  );
}
