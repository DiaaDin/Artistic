import React from "react";
import styled from "styled-components";
import ParagraphText from "../paragraphText/ParagraphText";
import SectionTitle from "../titles/SectionTitle";
import TeamMemberItem from "./TeamMemberItem";

//team imgs
import member1 from "../../assets/images/team1.png";
import member2 from "../../assets/images/team2.png";
import member3 from "../../assets/images/team3.png";

const Section = styled.section`
  padding: 10rem 0;

`;

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const TeamContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
`;

const TeamInfo = styled.div`
.subTitle {
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--mediumSlateBlue);
  text-transform: capitalize;
}
@media only screen and (max-width: 768px) {
  margin: 0 auto;
}
`;

const TeamMembers = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 5rem;
  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

const Team = () => {
  return (
    <Section id="Team">
      <Container>
        <TeamContainer>
          <TeamInfo>
            <ParagraphText className="subTitle">Team Members</ParagraphText>
            <SectionTitle className="teamTitle">
              The Best Team Availble
            </SectionTitle>
          </TeamInfo>
          <TeamMembers>
            <TeamMemberItem img={member1} name="Nud" title="Photo editor" />
            <TeamMemberItem img={member2} name="Momo" title="Video editor" />
            <TeamMemberItem img={member3} name="Kitt" title="Photographer" />
          </TeamMembers>
        </TeamContainer>
      </Container>
    </Section>
  );
};

export default Team;
