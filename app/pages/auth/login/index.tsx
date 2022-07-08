import { NextPageContext } from 'next';
import Image from 'next/image';
import {
  getProviders,
  getSession,
  signIn,
  ClientSafeProvider,
} from 'next-auth/react';
import { DiGithub } from 'react-icons/di';
import { Button, Container } from 'components/Login';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

interface Icons {
  [icon: string]: { color: string; icon: JSX.Element };
}
const icons: Icons = {
  github: { color: '#fff', icon: <DiGithub size={28} /> },
  linkedin: { color: '#0a66c2', icon: <BsLinkedin size={20} /> },
  google: { color: '#EA4335', icon: <SiGmail size={18} /> },
};

interface Props {
  providers: ClientSafeProvider;
}
function LogIn({ providers }: Props) {
  return (
    <Container>
      <div className="decoration">
        <Image
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * 870,
          )}/1920/1080?grayscale`}
          layout="fill"
          alt=""
          className="random-img"
        />
      </div>
      <div className="form">
        <h2>Sign in to Zenity</h2>
        <div className="providers">
          {Object.values(providers).map(({ name, id }) => (
            <Button key={id} onClick={() => signIn(id)} bg={icons[id].color}>
              {icons[id].icon}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default LogIn;

export async function getServerSideProps(context: NextPageContext) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) return { redirect: { permanent: false, destination: '/' } };

  return { props: { providers: await getProviders() } };
}
