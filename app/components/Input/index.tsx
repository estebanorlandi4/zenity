import { HTMLProps } from 'react';
import styled from 'styled-components';

const Label = styled.div`
  display: flex;
  flex-flow: column;

  .label {
    font-size: 0.85rem;
    font-weight: 500;
    color: #888;
  }

  input {
    background-color: #ffffff08;
    padding: 0.75rem;
    color: #fff;
    border-radius: 0.25rem;
  }
  input:focus {
    outline: 2px solid rebeccapurple;
  }

  input::placeholder {
    color: #fff;
  }
`;

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
}

function Input({ label, ...props }: Props) {
  return (
    <Label>
      <span className="label">{label}</span>
      <input type="text" {...props} />
    </Label>
  );
}

export default Input;
