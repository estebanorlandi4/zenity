import Image from 'next/image';

import { Container } from './styled';

interface User {
  email?: string | null;
  image?: string | null;
  name?: string | null;
}

interface Props {
  user?: User | null;
}

function Avatar({ user }: Props) {
  return (
    <Container>
      <span className="username">{user?.name}</span>
      <div className="image-container">
        <Image
          width="50px"
          height="50px"
          src={user?.image || 'https://picsum.photos/200/300'}
          alt=""
          className="avatar-image"
        />
      </div>
    </Container>
  );
}

export default Avatar;
