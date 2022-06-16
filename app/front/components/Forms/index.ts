import styled from 'styled-components';

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: grid;
  place-items: center;
  background-color: #0005;

  form {
    width: 100%;
    max-width: 25rem;
    background-color: #1e2025;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    padding: 2rem;
  }
`;
