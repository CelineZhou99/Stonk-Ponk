import styled, { css } from 'styled-components';

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignUpForm = styled.form`
    ${FlexCenter}
    flex-direction: column;
    margin-bottom: 5%;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    width: 40%;
    text-align: left;
    margin-top: 20px;
`;

export const TextField = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 13pt;
    background-color: transparent;
    width: 40%;

    &:focus {
        text-decoration: none;
    }
    &:focus+.underline {
        transform: scale(1);
    }
    padding: 15px 0;
`;

export const SignUpBtn = styled.input`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #9e22ff;
    color: white;
    font-size: 18pt;
    padding: 15px;
    width: 15%;
    margin: 20px;
    ${FlexCenter}
`;

/* Generic elements */
export const GenericForm = styled.form`
    ${FlexCenter}
    flex-direction: column;
`;

export const GenericSubmitButton = styled.input`
    cursor: pointer;
    border: none;
    padding: 15px;
    color: #ffffff;
    width: 200px;
    background-color: #9e22ff;
    padding: 20px;
    border-radius: 10px;
    margin: 40px 0;
    font-size: 12pt;
    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.5);
    ${FlexCenter}

    &:hover {
        background-color: #401363;
        transition: background-color 0.5s;
    }
`;

export const InputUnderlineDiv = styled.div`
    background-color: #9e22ff;
    display: inline-block;
    height: 2px;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
    width: 40%;
    position: relative;
`;