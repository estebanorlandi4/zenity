import { Container, EmptyContainer, Grid } from './styled';

import Page from '../Page';
import { IShortcut } from 'utils/interfaces';
import AddShortcut from 'components/AddShortcut';

import { useShow, useShortcuts } from 'hooks';

function ListShortcuts() {
  const { shortcuts, addShortcut, removeSite } = useShortcuts();
  const { state, toggle } = useShow({});

  const onSubmit = (shortcut: IShortcut) => addShortcut(shortcut);

  return (
    <Container>
      {state && <AddShortcut close={toggle} onSubmit={onSubmit} />}

      <Grid>
        {Array.from({ length: 8 }).map((_, i) => {
          const current = shortcuts ? shortcuts[i] : null;
          if (!current)
            return (
              <EmptyContainer key={i}>
                <button onClick={toggle}>Add Site</button>
              </EmptyContainer>
            );

          return <Page key={i} removeSite={removeSite} site={current} />;
        })}
      </Grid>
    </Container>
  );
}

export default ListShortcuts;
