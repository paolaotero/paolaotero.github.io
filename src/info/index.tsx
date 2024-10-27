import { Editorial } from "./editorial";
import { Posters } from "./posters";
import { Typography } from "./typography";
import { Animation } from "./animation";
import { Container } from "./styles";
import { Photo } from "./photo";

export function Info() {
  return (
    <Container>
      <Editorial />
      <Posters />
      <Typography />
      <Animation />
      <Photo />
    </Container>
  );
}
