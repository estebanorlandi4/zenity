import Input from 'components/Input';
import Container from 'components/Container';
import { FormEvent } from 'react';

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
        <button>submit</button>
      </form>
    </Container>
  );
}

export default Sites;
