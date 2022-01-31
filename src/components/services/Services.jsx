import React from "react";
import styled from "styled-components";
import { RiImageEditLine, RiCameraLine, RiHeartLine } from "react-icons/ri";
import SectionTitle from "../titles/SectionTitle";
import ServiceItem from "./ServiceItem";

const Section = styled.section`
  padding: 10rem 0;
  text-align: center;
  .STitle {
    margin-bottom: 3rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Services = () => {
  return (
    <Section id="Services">
      <Container>
        <SectionTitle className="STitle">our services</SectionTitle>
        <ItemsContainer>
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Professional Editing"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore alias voluptatum sunt, tenetur veniam."
          />
          <ServiceItem
            icon={<RiCameraLine />}
            title="Casual Photography"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore alias voluptatum sunt, tenetur veniam."
          />
          <ServiceItem
            icon={<RiHeartLine />}
            title="Wedding Photography"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore alias voluptatum sunt, tenetur veniam."
          />
        </ItemsContainer>
      </Container>
    </Section>
  );
};

export default Services;
