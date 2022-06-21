import styled from 'styled-components';
import useClock from 'hooks/useClock';
import { days, months } from 'utils/date';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  time {
    opacity: 0.35;
    display: block;
    font-size: calc(3rem + 2vw);
    font-weight: 800;
    margin: 0 auto;
    width: max-content;
  }
  p {
    opacity: 0.25;
    font-weight: 300;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

function Clock() {
  const date = useClock();

  return (
    <Container>
      <time>{date ? `${date.hh} : ${date.mm}` : '-- : --'}</time>
      <p>
        {date
          ? `${days[Number(date.DD)]} ${months[Number(date.MM)]} ${date.dd}`
          : 'day month year'}
      </p>
    </Container>
  );
}

export default Clock;
