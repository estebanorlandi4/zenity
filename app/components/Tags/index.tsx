import { ITag } from 'utils/interfaces';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface TagsProps {
  value?: ITag[];
}

const Container = styled.div`
  &,
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    background-color: #37a;
    padding: 0.25rem 0.75rem;
    border-radius: 5px;
  }
`;

function Tags({ value }: TagsProps) {
  const [tags, setTags] = useState<ITag[]>(value || []);

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {};

  return (
    <Container>
      <ul>
        {tags.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
      <input onChange={onChange} />
    </Container>
  );
}

export default Tags;
