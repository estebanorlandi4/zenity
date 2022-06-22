import Input from 'components/Input';
import { ITag } from 'utils/interfaces';
import Container from 'components/Container';
import { FormEvent } from 'react';

const randomId = () => `${Math.random().toString()}-${new Date().getTime()}`;

const defTags: ITag[] = [{ value: 'Icons', id: randomId() }];

function Sites() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>Sites</h1>

      <form onSubmit={onSubmit}>
        <Input label="Name" name="name" />
        <Input label="URL" name="url" />
        <Input label="Tags" name="tags" type="tags" />
        <button>submit</button>
      </form>
    </Container>
  );
}

export default Sites;
