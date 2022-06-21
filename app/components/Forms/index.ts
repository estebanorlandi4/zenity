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
    z-index: 2;
    position: relative;
    width: 100%;
    max-width: 25rem;
    background-color: #1e2025;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 0.25rem 1rem #0001;
  }

  button[type='submit'] {
    background-color: rebeccapurple;
    padding: 0.75rem 0;
    border-radius: 0.25rem;
    margin: 2rem 0 0 0;
  }

  .close {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    color: #fff;
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 800;
    opacity: 0.25;
  }
  .close:hover,
  .close:focus {
    color: #f33;
    opacity: 1;
  }
`;
