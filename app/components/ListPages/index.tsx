import Image from 'next/image';
import { Container, EmptyPage, Grid, Page } from './styled';

import mockup from '../../mockups/pages.json';
import { useEffect, useState } from 'react';
import { getLocal, removeLocal, saveLocal } from '../../utils/storage';

const Img = ({ url }: any) => {
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
  const handleSite = (index: number) => {
    console.log(index);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <Grid>
        {Array.from({ length: 8 }).map((_, i) => {
          const favorite = mockup.favorites[i];
          if (!favorite)
            return (
              <EmptyPage key={i}>
                <button onClick={() => handleSite(i)}>Add Site</button>
              </EmptyPage>
            );

          const { name, url } = favorite;
          return (
            <Page key={i}>
              <a href={`https://${url}`}>
                <Img url={url} />
                <p>{name}</p>
              </a>
            </Page>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ListFavorites;
