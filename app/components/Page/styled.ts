import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  padding: 1rem;
  height: 100%;

  .remove {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff1;
    padding: 0.25rem 0.5rem;
    :hover {
      color: #fff;
    }
  }
  a {
    display: flex;
    flex-flow: column;
    gap: 0.25rem;
    transition: all 0.25s;
    cursor: pointer;
  }

  p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    letter-spacing: 0.75px;
    font-size: 0.85rem;
    color: #fff5;
    text-transform: capitalize;
    text-align: center;
    transition: all 0.25s;
  }

  .image-container {
    position: relative;
    display: block;
    width: 50%;
    aspect-ratio: 1/1;
    margin: 0 auto;

    .image {
      border-radius: 0.25rem;
      object-fit: cover;
      object-position: center;
    }

    .loading {
      background: linear-gradient(-45deg, transparent, #fff1, transparent);
      background-size: 500%;
      background-position: 0 0;
      animation: img-loading 0.5s infinite;
    }

    @keyframes img-loading {
      from {
        background-position: 0 0;
      }
      to {
        background-position: 100% 100%;
      }
    }
  }

  a:hover {
    p {
      color: #ffff;
    }
  }
`;
