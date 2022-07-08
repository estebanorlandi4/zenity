import { HTMLProps } from 'react';
import styled from 'styled-components';
import Tags from '../Tags';

const Label = styled.div`
  display: flex;
  flex-flow: column;

  .label {
    display: flex;
    width: 100%;
    background-color: red;

    font-size: 0.85rem;
    font-weight: 500;
    color: #888;
    background-color: red;
  }

  input {
    display: flex;
    width: 100%;
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

const inputTypes: { [key: string]: React.FC } = {
  tags: Tags,
};

function Input({ label, type: inputType, ...props }: Props) {
  const InputComponent = (inputType && inputTypes[inputType]) || 'input';

  return (
    <Label>
      <span className="label">{label}</span>
      <InputComponent type="text" {...props} />
    </Label>
  );
}

export default Input;
