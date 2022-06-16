import styled from 'styled-components';

export const Container = styled.section`
  width: max-content;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 100px);
  gap: 2.5rem;
  margin: 0.5rem 0 0 0;
`;

export const EmptyContainer = styled.li`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;

  button {
    display: grid;
    place-items: center;

    background-color: red;
    width: 100%;
    height: 100%;

    background-color: #ffffff05;
    border: 3px dashed #fff2;
    border-radius: 1rem;
  }
`;
