import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import { useEffect } from 'react';
import { Container } from './styled';

const Button = styled.button`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  gap: 0.25rem;
`;

function Avatar() {
  const userSession = useSession();
  const { data: session, status } = userSession;
  console.log(userSession);

  useEffect(() => {
    console.log(status);
  }, [status]);

  if (!session)
    return (
      <Button onClick={() => signIn()}>
        <BiLogIn size={18} /> login
      </Button>
    );
  return (
    <Container>
      <button onClick={() => signOut()}>
        <Image
          width="50px"
          height="50px"
          src={session?.user?.image || 'https://picsum.photos/200/300'}
          alt=""
          className="avatar-image"
        />
      </button>
    </Container>
  );
}

export default Avatar;
