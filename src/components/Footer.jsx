import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.svg'


const FooterContainer = styled.footer`
  background-color: ${({theme}) => theme.dark};
  text-align: center;
    
`

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 1rem 0;

`

const Img = styled.img`
    @media only screen and (max-width:768px){
    max-width: 80px;

    }
    max-width: 100px;
    margin-bottom: 1rem;

    
`

const Text = styled.h2`
  color: ${({theme}) => theme.light};
    letter-spacing: 1px;
    font-size: 2rem;
    font-weight: 500;
    @media only screen and (max-width:768px){
    font-size: 1.5rem;
    letter-spacing: 0;

    }
`


const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <Img src={Logo}/>
                <Text>All Copy Right Reversed &copy; Diaa Zahran 2022 </Text>
            </Wrapper>
        </FooterContainer>
    )
}

export default Footer
