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

type Change = ChangeEvent<HTMLInputElement>;
function Tags({ value }: TagsProps) {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<ITag[]>(value || []);

  const onChange = ({ target: { name, value } }: Change) => {
    if ([',', ' '].includes(value[value.length - 1])) {
      const newval = {
        value: value.split(',')[0],
        id: Math.random().toString(),
      };

      if (!newval.value.trim()) return;
      setTags((old) => [...old, newval]);
      setInput('');
    } else setInput(value);
  };

  return (
    <Container>
      <ul>
        {tags.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
      <input value={input} onChange={onChange} />
    </Container>
  );
}

export default Tags;
