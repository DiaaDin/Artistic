import React from 'react'
import styled from "styled-components";
import ParagraphText from '../paragraphText/ParagraphText';

const Items = styled.div`

.memberName{
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({theme}) => theme.dark};

}

`
const ImgContainer = styled.div`
margin-bottom: 2rem;
@media only screen and (max-width:768px){
    margin-bottom: 1rem;

}
`
const Img = styled.img`
border-radius: 15px;
@media only screen and (max-width:768px){
    max-width: 250px;
    
}
`


const TeamMemberItem = ({img, name, title}) => {
    return (
        <Items>
          <ImgContainer>
          <Img src={img} alt={name}/>
          </ImgContainer>
          <ParagraphText className='memberName'>
                {name}
          </ParagraphText>
          <ParagraphText className='membersubTitle'>
                {title}
          </ParagraphText>
        </Items>
    )
}

export default TeamMemberItem
