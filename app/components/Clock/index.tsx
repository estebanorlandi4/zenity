import styled from 'styled-components';
import useClock from '../../hooks/useClock';
import { days, months } from '../../utils/date';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  time {
    color: #fff6;
    display: block;
    font-size: 5rem;
    font-weight: 800;
    margin: 0 auto;
    width: max-content;
  }
  p {
    color: #fff4;
    font-weight: 300;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

function Clock() {
  const date = useClock();

  if (!date) return null;
  return (
    <Container>
      <time>
        {date.hh} : {date.mm}
      </time>
      <p>
        {days[Number(date.DD)]} {months[Number(date.MM)]} {date.dd}
      </p>
    </Container>
  );
}

export default Clock;
