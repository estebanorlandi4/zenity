import styled from 'styled-components';

export const PlaceholderContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  .username {
    opacity: 1;
    background-color: #fff1;
    height: 1rem;
    width: 10rem;
    border-radius: 1rem;
  }
  .image {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #fff1;
    border-radius: 100%;
    ::after {
      display: none;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  .username {
    opacity: 0.25;
    font-size: 0.9rem;
  }

  .image-container {
    position: relative;
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0;
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
    border: 5px solid #000;
  }
`;
