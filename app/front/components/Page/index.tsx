import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IPage } from '../../utils/interfaces';
import { Container } from './styled';

interface Props {
  removeSite: (id: string) => any;
  site: IPage;
}

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

function Page({ removeSite, site }: Props) {
  const { name, url, _id } = site;
  return (
    <Container>
      <button onClick={() => removeSite(_id || '')} className="remove">
        <AiOutlineClose />
      </button>
      <a href={`https://${url}`}>
        <Img url={url} />
        <p>{name}</p>
      </a>
    </Container>
  );
}

export default Page;
