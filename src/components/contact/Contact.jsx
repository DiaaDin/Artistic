import React from "react";
import styled from "styled-components";
import SectionTitle from "../titles/SectionTitle";
import ParagraphText from "../paragraphText/ParagraphText";
import FormField from "./FormField";
import PrimaryButton from "../buttons/PrimaryButton";

const Section = styled.section`
  padding: 10rem 0;
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;
const Wrapper = styled.div``;
const Info = styled.div`
  .STitle {
    text-transform: capitalize;
  }

  .Ptext {
    text-transform: capitalize;
  }
  margin-bottom: 3rem;
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.dark};
  padding: 3rem;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 3rem;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 2rem;
    padding: 1.5rem 1rem;
  }

  .fullWidth {
    grid-column: span 2;
    @media only screen and (max-width: 768px) {
      grid-column: span 1;
    }
  }
  .btn {
    width: max-content;
    cursor: pointer;
    margin-top: 2rem;
    @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
  }
`;

const Contact = () => {
  return (
    <Section id="Contact">
      <Container>
        <Wrapper>
          <Info>
            <SectionTitle className="STitle">Get in Touch</SectionTitle>
            <ParagraphText className="Ptext">
              We would love to hear from you
            </ParagraphText>
          </Info>
          <Form>
            <FormField
              lable="Name"
              id="name"
              type="text"
              name="name"
              className="fullWidth"
              required
            />
            <FormField
              lable="Email"
              id="email"
              type="email"
              name="email"
              required
            />
            <FormField
              lable="Subject"
              id="subject"
              type="text"
              name="subject"
              required
            />
            <FormField
              className="fullWidth"
              lable="Message"
              rows="6"
              id="message"
              name="message"
              required
            />
            <PrimaryButton buttonType="button" className="btn" type="submit">
              Send
            </PrimaryButton>
          </Form>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Contact;
