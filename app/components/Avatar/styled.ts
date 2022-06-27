import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  .username {
    opacity: 0.25;
  }

  .image-container {
    position: relative;
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;

    ::after {
      --size: 15%;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0%, -25%);
      width: var(--size);
      height: var(--size);
      background-color: #2f2;
      border-radius: 100%;
      border: 0.25rem solid #1e1e2e;
    }
  }

  &,
  * {
    overflow: auto;
  }

  .avatar-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
    border: 5px solid #000;
  }
`;
