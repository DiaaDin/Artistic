import React from 'react'
import styled from 'styled-components'

const A = styled.a`
    display: inline-block;
    background-color: var(--mediumSlateBlue);
    padding: 1.5rem 2rem;
    color: var(--white);
    font-size: 1.6rem;
    text-transform: capitalize;
    border-radius: 10px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    @media only screen and (max-width:768px){
        font-size: 1.4rem;
        padding: 1.2rem 1.5rem;
    }
`



const PrimaryButton = ({children,buttonType, ...rest}) => {
    return (
        <A {...rest} as={buttonType}>
            {children}
        </A>
    )
}

export default PrimaryButton
