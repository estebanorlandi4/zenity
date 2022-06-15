import { Container, EmptyContainer, Grid } from './styled';

import useFavorites from '../../hooks/useFavorites';
import Page from '../Page';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IPage } from '../../utils/interfaces';
import Input from '../Input';
import { Button } from '../Button';
import { FormContainer } from '../Forms';

const initialState = {
  name: '',
  url: '',
};

function ListFavorites() {
  const { favorites, addSite, removeSite } = useFavorites();
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState<IPage>(initialState);

  const toggleForm = () => setShow((old) => !old);

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInputs((old) => ({ ...old, [name]: value }));
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addSite(inputs);
    setInputs(initialState);
    toggleForm();
  };

  return (
    <Container>
      {show && (
        <FormContainer onSubmit={onSubmit}>
          <form>
            <button type="button" onClick={toggleForm} className="close">
              X
            </button>
            <h4>Create new Site</h4>
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
            <Button type="submit">Create site</Button>
          </form>
        </FormContainer>
      )}

      <Grid>
        {Array.from({ length: 8 }).map((_, i) => {
          const favorite = favorites ? favorites[i] : null;
          if (!favorite)
            return (
              <EmptyContainer key={i}>
                <button onClick={toggleForm}>Add Site</button>
              </EmptyContainer>
            );

          return <Page key={i} removeSite={removeSite} site={favorite} />;
        })}
      </Grid>
    </Container>
  );
}

export default ListFavorites;
