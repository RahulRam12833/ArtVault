import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  width: 100%;

  margin-top: 30px;
  padding-top: 25px;

  border-top: 1px solid var(--border);
`;

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    margin: 0 0 5px;

    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 0.1em;

    color: var(--muted);
  }

  .StripeElement {
    width: 100%;

    padding: 14px;

    border: 1px solid var(--border);
    background: #fff;

    transition: border-color 0.2s ease;

    &:focus-within {
      border-color: var(--text);
    }
  }
`;

export const PaymentButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;