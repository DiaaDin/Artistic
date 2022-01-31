import React from "react";
import styled from "styled-components";
import PrimaryButton from "./buttons/PrimaryButton";
import ParagraphText from "./paragraphText/ParagraphText";
import HeroTitle from "./titles/HeroTitle";
import HeroImg from "../assets/images/hero.png";

const Section = styled.section`
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media only screen and (max-width:768px){
      flex-direction: column-reverse;
      gap: .5rem;
  }
`;
const Info = styled.div`
  flex: 3;

  .hero_title {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }

  .hero_desc {
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
`;

const ImgContainer = styled.div`
  flex: 4;
  @media only screen and (max-width:768px){
    display: flex;
    justify-content: flex-end;
    
  }
  `;

const Img = styled.img`
  object-fit: contain;

  @media only screen and (max-width:768px){
     margin-top: auto;
     max-width: 400px;
  }
`;

const Hero = () => {
  return (
    <Section id="Hero">
      <Container>
        <HeroWrapper>
          <Info>
            <HeroTitle className="hero_title">
              A click of artistic joy
            </HeroTitle>
            <ParagraphText className="hero_desc">
              Because every picture tells a story, let's help you tell yours.
            </ParagraphText>
            <PrimaryButton buttonType='button'>get in touch</PrimaryButton>
          </Info>
          <ImgContainer>
            <Img src={HeroImg} alt="hero"></Img>
          </ImgContainer>
        </HeroWrapper>
      </Container>
    </Section>
  );
};

export default Hero;
