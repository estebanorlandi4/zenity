import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;

  button {
    --size: 2.5rem;
    display: grid;
    place-items: center;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
  }
  .avatar-image {
    object-fit: cover;
    object-position: center;
  }
`;
