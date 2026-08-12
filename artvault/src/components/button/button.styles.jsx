import styled from "styled-components";

import {SpinnerContainer} from "../spinner/spinner.styles"

export const BaseButton = styled.button`
  min-width: 165px;
  height: 50px;

  padding: 0 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  background: var(--text);
  color: var(--background);

  border: 1px solid var(--text);
  border-radius: 0;

  cursor: pointer;

  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    background: var(--background);
    color: var(--text);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background: #4285f4;
  color: white;
  border-color: #4285f4;

  &:hover {
    background: #357ae8;
    color: white;
    border-color: #357ae8;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background: var(--background);
  color: var(--text);
  border-color: var(--text);

  &:hover {
    background: var(--text);
    color: var(--background);
  }
`;
export const ButtonSpinner=styled(SpinnerContainer)`
  width:30px;
  height:30px;
`