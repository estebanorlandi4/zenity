import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IShortcut } from 'utils/interfaces';
import { Container } from './styled';

interface ParseProps {
  url: string;
}
const parseURL = ({ url }: ParseProps) => {
  if (url.includes('/')) return url.split('/')[0];
  return url;
};

interface Props {
  removeSite: (id: string) => any;
  site: IShortcut;
}
const Img = ({ url }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => setIsLoading(false);

  return (
    <div className="image-container">
      <Image
        className={`image ${isLoading ? 'loading' : ''}`}
        layout="fill"
        src={`https://icon.horse/icon/${parseURL({ url })}`}
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
      <a href={`https://${url}`} target="_blank" rel="noreferrer">
        <Img url={url} />
        <p>{name}</p>
      </a>
    </Container>
  );
}

export default Page;
