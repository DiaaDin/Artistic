import React from 'react'
import styled from 'styled-components'
import ParagraphText from './paragraphText/ParagraphText'
import SectionTitle from './titles/SectionTitle'


const Section = styled.section`
padding: 10rem 0;

`


const Container = styled.div`
max-width: 1200px;
width: 90%;
margin: 0 auto;
`
const Wrapper = styled.div`
padding: 5rem 3rem;
background-color: var(--mediumSlateBlue);
max-width: 500px;
margin: 0 auto;
border-radius: 15px;
text-align: center;

.STitle{
    margin-bottom: 0.3rem;
    color: var(--lightBlue_1);
}
.SubTitle{
    margin-bottom: 3rem;
    color: var(--lightBlue_1);

}
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const Input = styled.input`
   width :100% ;
   max-width: 300px;
   height: 35px;
   background-color: var(--lightBlue_1);
   border-radius: 5px;
   font-size: 1.5rem;
   padding-left: 1.2rem;
   border: none;
    outline: none;
`

const Button = styled.button`
       height: 35px;
   font-size: 1.5rem;
   cursor: pointer;
   padding: 0 1.4rem;
   text-transform: capitalize;
   color: var(--lightBlue_1);
   background-color: var(--darkBlue_2);
   border: none;
   border-radius: 5px;


`








const Newsletter = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <SectionTitle className='STitle'>
                        Join Newsletter
                    </SectionTitle>
                    <ParagraphText className='SubTitle'>
                        Get Latest Updates
                    </ParagraphText>
                    <Form className='NewsForm'>
                        <Input type='email' placeholder='Enter Your Email'></Input>
                        <Button type='submit' buttonType='button'>Subscribe</Button>
                    </Form>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Newsletter
