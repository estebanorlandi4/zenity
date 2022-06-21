import Input from 'components/Input';
import { ITag } from 'utils/interfaces';
import Container from 'components/Container';

const defTags: ITag[] = [
  { value: 'asdfgh', id: `tag-${new Date().getTime().toString()}` },
  { value: 'qwerty', id: `tag-${new Date().getTime().toString()}` },
  { value: 'zxcvbn', id: `tag-${new Date().getTime().toString()}` },
];

function Sites() {
  return (
    <Container>
      <h1>Sites</h1>

      <form>
        <Input label="Name" />
        <Input label="URL" />
        <Input label="Tags" type="tags" value={defTags} />

        <button>submit</button>
      </form>
    </Container>
  );
}

export default Sites;
