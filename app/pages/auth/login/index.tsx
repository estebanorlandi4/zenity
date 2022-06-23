import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { DiGithub } from 'react-icons/di';
import { Button, Container } from 'components/Login';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { providers: await getProviders() } };
};

const icons: any = {
  github: { color: '#000', icon: <DiGithub size={28} /> },
  linkedin: { color: '#0a66c2', icon: <BsLinkedin size={20} /> },
  google: { color: '#EA4335', icon: <SiGmail size={18} /> },
};

function LogIn({ providers }: any) {
  console.log(providers);
  return (
    <Container>
      {Object.values(providers).map(({ name, id }: any) => (
        <Button key={id} onClick={() => signIn(id)} bg={icons[id].color}>
          {icons[id].icon}
        </Button>
      ))}
      <Button bg={icons.linkedin.color}>{icons.linkedin.icon}</Button>
      <Button bg={icons.google.color}>{icons.google.icon}</Button>
    </Container>
  );
}

export default LogIn;
