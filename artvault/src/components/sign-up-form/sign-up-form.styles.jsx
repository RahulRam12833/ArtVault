import styled from 'styled-components';

export const SignUpFormContainer = styled.div`
  width: 100%;
  max-width: 420px;

  padding: 45px;

  background: #fff;
  border: 1px solid var(--border);

  color: var(--text);

  h2 {
    margin: 0 0 12px;

    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  > span {
    display: block;
    margin-bottom: 30px;

    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    line-height: 1.5;

    color: var(--muted);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 750px) {
    max-width: none;
    padding: 35px 25px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;

  margin-top: 10px;

  button {
    flex: 1;
  }


`;