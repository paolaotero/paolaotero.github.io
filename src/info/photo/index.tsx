import { Card, Img, ImgContainer, Title } from "../styles";

import One from "../../assets/images/photo/1.png";
import Two from "../../assets/images/photo/2.png";
import Three from "../../assets/images/photo/3.JPG";
import Four from "../../assets/images/photo/4.JPG";
import Five from "../../assets/images/photo/5.JPG";
import Six from "../../assets/images/photo/6.JPG";
import Seven from "../../assets/images/photo/7.JPG";
import Eight from "../../assets/images/photo/8.JPG";
import Nine from "../../assets/images/photo/9.JPG";
import Ten from "../../assets/images/photo/10.JPG";
import Eleven from "../../assets/images/photo/11.JPG";
import Twelve from "../../assets/images/photo/12.JPG";
import Thirteen from "../../assets/images/photo/13.JPG";
import Fourteen from "../../assets/images/photo/14.JPG";
import Fifteen from "../../assets/images/photo/15.JPG";
import Sixteen from "../../assets/images/photo/16.JPG";
import Seventeen from "../../assets/images/photo/17.JPG";
import Eighteen from "../../assets/images/photo/18.JPG";
import Nineteen from "../../assets/images/photo/19.JPG";
import Twenty from "../../assets/images/photo/20.JPG";
import TwentyOne from "../../assets/images/photo/21.JPG";
import TwentyTwo from "../../assets/images/photo/22.JPG";
import TwentyThree from "../../assets/images/photo/23.JPG";

export function Photo() {
  const images = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Eighteen,
    Nineteen,
    Twenty,
    TwentyOne,
    TwentyTwo,
    TwentyThree,
  ];

  return (
    <Card id="fotografia">
      <Title>fotografia</Title>
      <ImgContainer layout="photo">
        {images.map((img) => (
          <Img src={img} />
        ))}
      </ImgContainer>
    </Card>
  );
}
