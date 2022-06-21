import { FormContainer } from 'components/Forms';
import Input from 'components/Input';
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react';
import { IShortcut } from 'utils/interfaces';

interface Props {
  close: () => void;
  onSubmit: (_inputs: IShortcut) => void;
}

const initialState: IShortcut = {
  name: '',
  url: '',
};

interface Change extends ChangeEvent<HTMLInputElement> {}

function AddShortcut({ onSubmit, close }: Props) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = ({ target: { name, value } }: Change) => {
    setInputs((old) => ({ ...old, [name]: value }));
  };

  const create = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(inputs);
    setInputs(initialState);
    close();
  };

  const onClick = (e: SyntheticEvent): void => {
    const target = e.target as Element;
    if (target.id === 'shortcut-popup') close();
  };

  return (
    <FormContainer id="shortcut-popup" onClick={onClick}>
      <form onSubmit={create}>
        <button className="close" type="button" onClick={close}>
          X
        </button>

        <h4>Shortcut</h4>

        <Input
          name="name"
          value={inputs.name}
          onChange={onChange}
          label="Name"
          autoComplete="off"
          autoFocus
        />
        <Input
          name="url"
          value={inputs.url}
          onChange={onChange}
          label="URL"
          autoComplete="off"
        />

        <button type="submit">Create Shortcut</button>
      </form>
    </FormContainer>
  );
}

export default AddShortcut;
