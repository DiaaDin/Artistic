import React from "react";
import styled from "styled-components";

const FieldStyle = styled.div`
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.light};
  }

  input,
  textarea {
    margin: 1rem 0;
    width: 100%;
    height: 35px;
    padding: 1rem;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.dark};

    @media only screen and (max-width: 768px) {
    margin: 0.5rem 0;

  }
  }

  textarea {
    height: auto;
    resize: vertical;
  }

  @media only screen and (max-width: 768px) {
    input {
      font-size: 1.3rem;
    }
  }
`;

const FormField = ({ lable, id, rows = 1, className, ...rest }) => {
  return (
    <FieldStyle className={className}>
      <label htmlFor={id}>
        {lable}
        {rows <= 1 ? (
          <input type="text" id={id} {...rest} />
        ) : (
          <textarea id={id} rows={rows} {...rest} />
        )}
      </label>
    </FieldStyle>
  );
};

export default FormField;
