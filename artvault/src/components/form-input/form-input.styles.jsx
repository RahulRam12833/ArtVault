import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 14px;
  font-weight: normal;

  position: absolute;
  pointer-events: none;

  left: 5px;
  top: 10px;

  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: transparent;
  color: ${subColor};

  font-size: 16px;

  padding: 10px 10px 10px 5px;

  display: block;
  width: 100%;

  border: none;
  border-bottom: 1px solid ${subColor};
  border-radius: 0;

  margin: 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;