import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size: 6rem;
color: ${({theme}) => theme.dark};
font-weight: 900;
text-transform: capitalize;
@media only screen and (max-width: 768px) {
font-size: 4rem;
}
`

const HeroTitle = ({children, ...rest}) => {
    return <Title {...rest}>{children}</Title>
    
}

export default HeroTitle
