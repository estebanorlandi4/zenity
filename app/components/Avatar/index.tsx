import Image from 'next/image';

import { Container, PlaceholderContainer } from './styled';

interface User {
  email?: string | null;
  image?: string | null;
  name?: string | null;
}

interface Props {
  user?: User | null;
  isLoading: boolean;
  onClick(): void;
  as: 'div' | 'button';
  direction?: 'left' | 'right';
}

function Placeholder() {
  return (
    <PlaceholderContainer>
      <span className="username" />
      <div className="image" />
    </PlaceholderContainer>
  );
}

function Avatar({ as, direction, user, isLoading, onClick }: Props) {
  const handleClick = () => {
    if (isLoading) return null;
    return onClick();
  };

  if (isLoading) return <Placeholder />;

  const username = <span className="username">{user?.name}</span>;
  return (
    <Container as={as} onClick={handleClick}>
      {!direction || direction === 'left' ? username : null}
      <div className="image-container">
        {user?.image && (
          <Image layout="fill" src={user.image} className="image" alt="" />
        )}
      </div>
      {direction === 'right' && username}
    </Container>
  );
}

export default Avatar;
