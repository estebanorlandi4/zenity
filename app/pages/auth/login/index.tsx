import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { providers: await getProviders() } };
};

function LogIn({ providers }: any) {
  return (
    <div>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.id}>
          <button onClick={() => signIn(provider.id)}>{provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default LogIn;
