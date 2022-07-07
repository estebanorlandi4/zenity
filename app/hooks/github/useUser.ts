import { Octokit } from '@octokit/rest';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Endpoints } from '@octokit/types';

type User = Endpoints['GET /user']['response']['data'];

function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const promise = async () => {
      if (!session) return null;

      const { accessToken: auth } = session;
      const octo = new Octokit({ auth });
      const { data: userData } = await octo.request('GET /user');

      setUser(userData);
    };
    promise();
  }, [session]);

  return { user };
}

export default useUser;
