import React from "react";
import styled from "styled-components";








const Item = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 10px;
  transition: all .3s ease;
  &:hover {
    background-color: var(--mediumSlateBlue);
    .SIcon{
        background-color: var(--lightBlue_1);
        color: var(--mediumSlateBlue);
    }
    .STitle{
        color: var(--lightBlue_1);
    }
    .SParagraph{
        color: var(--lightBlue_1);


    }
    
}
  .SIcon {
    font-size: 2rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.dark};
       color: ${({ theme }) => theme.light};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 60%;
    }
}
.STitle{
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.dark};
}

.SParagraph{
    color: ${({ theme }) => theme.dark};
    
}

@media only screen and (max-width:768px){
    background-color:${({ theme }) => theme.dark};
    .SIcon{
       background-color: ${({ theme }) => theme.light};
       color: ${({ theme }) => theme.dark};
    }
    .STitle{
      color:  ${({ theme }) => theme.light};
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }
    .SParagraph{
       color: ${({ theme }) => theme.light};


    }
}
`;





const ServiceItem = ({ icon, title, desc }) => {
    return (
    <Item>
      <div className="SIcon">{icon}</div>
      <div className="STitle">{title}</div>
      <div className="SParagraph">{desc}</div>
    </Item>
  );
};

export default ServiceItem;
