import Image from 'next/image';
import { Container, Grid, Page } from './styled';

import mockup from '../../mockups/pages.json';
import { useEffect, useState } from 'react';

const Img = ({ url, ...props }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => setIsLoading(false);

  return (
    <div className="image-container">
      <Image
        className={`image ${isLoading ? 'loading' : ''}`}
        layout="fill"
        src={`https://icon.horse/icon/${url}`}
        alt=""
        loading="lazy"
        onLoad={onLoad}
      />
    </div>
  );
};

function ListFavorites() {
  return (
    <Container>
      <h3>Favorites</h3>
      <Grid>
        {mockup.favorites.map(({ name, url }, i) => (
          <Page key={i}>
            <a href={`https://${url}`}>
              <Img url={url} />
              <p>{name}</p>
            </a>
          </Page>
        ))}
      </Grid>
    </Container>
  );
}

export default ListFavorites;
