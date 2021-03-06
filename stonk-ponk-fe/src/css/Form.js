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
    width: 70%;
    margin: 0 auto;
    gap: 1em;
`;

function createLabel(width, marginBottom, marginTop) {
    return styled.label`
        margin-bottom: ${marginBottom};
        width: ${width};
        text-align: left;
        margin-top: ${marginTop};
    `;
}

export const Label = createLabel("100%", "0", "5%");

export const SettingsLabel = createLabel("30%", "20%", "20%");

export const SettingsModalLabel = createLabel("30%", "5%", "5%");


function createTextField(width) {
    return styled.input`
        outline: none;
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: 13pt;
        background-color: transparent;
        width: ${width};

        &:focus {
            text-decoration: none;
            border-color: #9e22ff;
        }
        &:focus+.underline {
            transform: scale(1);
        }
        padding: 15px 0;
    `;
}

export const TextField = createTextField("100%");

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

export const CreateModalForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
`;

/* Generic elements */
export const GenericForm = styled.form`
    ${FlexCenter}
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
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
    width: 100%;
    position: relative;
`;

export const ModalLabel = createLabel("100%", "10px", "10px");

export const UploadImage = styled.input``;

