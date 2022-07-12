import { NextPageContext } from 'next';
import {
  getProviders,
  getSession,
  signIn,
  ClientSafeProvider,
} from 'next-auth/react';
import { DiGithub } from 'react-icons/di';
import { Button, Container } from 'components/Login';

interface Icons {
  [icon: string]: { color: string; icon: JSX.Element };
}
const icons: Icons = {
  github: { color: '#fff', icon: <DiGithub className="icon" size={28} /> },
};

interface Props {
  providers: ClientSafeProvider;
}
function LogIn({ providers }: Props) {
  return (
    <Container>
      <div className="decoration" />
      <div className="form">
        <div>
          <div>
            <h2>Join now!</h2>
            <p>
              Bust your productivity adding your favorite pages and handling
              your Github account from 1 page
            </p>
          </div>

          <div className="providers">
            {Object.values(providers).map(({ name, id }) => (
              <Button key={id} onClick={() => signIn(id)}>
                {icons[id].icon} Login with {name}
              </Button>
            ))}
          </div>
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
