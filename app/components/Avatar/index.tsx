import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import { Container } from './styled';

const Button = styled.button`
  width: 100%;
  padding: 1rem 0;
  display: grid;
  place-items: center;
  > * {
    transform: translate(-3px, 0);
  }
`;

const Login = () => (
  <Button onClick={() => signIn()}>
    <BiLogIn size={18} />
  </Button>
);

function Avatar() {
  const { data: session, status } = useSession();
  console.log(session);

  if (!session) return <Login />;
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
