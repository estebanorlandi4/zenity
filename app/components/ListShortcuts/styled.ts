import styled from 'styled-components';

export const Container = styled.section`
  width: max-content;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  gap: 1rem 2.5rem;
  margin: 0.5rem 0 0 0;

  @media screen and (min-width: 40rem) {
    grid-template-columns: repeat(4, 100px);
  }
`;

export const EmptyContainer = styled.li`
  width: 4.5rem;
  height: 4.5rem;
  margin: 0 auto;

  button {
    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;
    font-size: 0.65rem;
    font-weight: 600;
    color: #fff2;

    background-color: #ffffff03;
    border: 3px dashed #fff2;
    border-radius: 15px;

    letter-spacing: 0.75px;
    transition: all 0.25s;
  }

  button:hover {
    color: #fff6;
    background-color: #ffffff0a;
    border: 3px dashed #fff6;
  }
`;
