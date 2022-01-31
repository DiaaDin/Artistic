import React from 'react'
import styled from 'styled-components'
import ParagraphText from './paragraphText/ParagraphText'
import HeroTitle from './titles/HeroTitle'
import SectionTitle from './titles/SectionTitle'
import PrimaryButton from './buttons/PrimaryButton'
import AboutImg from '../assets/images/about.png'

const Section = styled.section`
    padding: 10rem 0;
    min-height: 100vh;
    .sectionTitle{
        text-align: center;
    margin-bottom: 3rem;

    }
    `
const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .subTitle{
        margin-bottom: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        color: var(--mediumSlateBlue);
    }
    .aboutTitle{
        margin-bottom: 2rem;
        max-width: 300px;
    }
    .aboutDesc{
        margin-bottom: 2rem;
        max-width: 300px;
    }

    @media only screen and (max-width:768px){
        flex-direction: column;
    }
`
const ImgContainer = styled.div`
    @media only screen and (max-width:768px){
        max-width: 400px;
    }
`
const Img = styled.img`
    
`
const Info = styled.div`
    
`


const About = () => {
    return (
        <Section id="About">
            <HeroTitle className='sectionTitle'>About</HeroTitle>
            <Container>
                <ImgContainer>
                <Img src={AboutImg} alt='artist'/>
                </ImgContainer>
                <Info>
                    <ParagraphText className='subTitle'>
                        Who Are We 
                    </ParagraphText>
                    <SectionTitle className='aboutTitle'>
                        Capturing life as it happens
                    </SectionTitle>
                    <ParagraphText className='aboutDesc'>
                        "Artistic" is a studio of some passionate photographers, ourGoal is to capture your experince. 
                    </ParagraphText>
                    <PrimaryButton buttonType='button'>Get in touch</PrimaryButton>
                </Info>
            </Container>
        </Section>
    )
}

export default About
