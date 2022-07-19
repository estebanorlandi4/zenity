import { GetServerSideProps, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

type ServerResponse = Promise<GetServerSideProps> | GetServerSideProps;

type CB = (_?: NextPageContext) => ServerResponse;

interface Props {
  permanent: boolean;
  cb?: CB;
}
function privateFactory({ cb, permanent }: Props) {
  return async (context: NextPageContext) => {
    const session = await getSession(context);
    if (!session) return { redirect: { permanent, destination: '/' } };

    if (!cb) return { props: {} };

    const res = cb(context);
    const isPromise = typeof res === 'object' && typeof res.then === 'function';

    if (isPromise) return await res;
    if (res) return res;
    return { props: {} };
  };
}

export default privateFactory;
