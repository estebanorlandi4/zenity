import { Octokit } from '@octokit/rest';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { Users } from 'utils/interfaces/github';

interface Props {
  search: string;
}
function useUsers({ search }: Props) {
  const { data: session } = useSession();
  const [users, setUsers] = useState<null | Users>(null);

  const getUsers = useCallback(async () => {
    if (!search || !session?.accessToken) return setUsers(null);

    const { accessToken: auth } = session;

    const octokit = new Octokit({ auth });
    const { data } = await octokit.request('GET /search/users?q={search}', {
      search,
    });

    if (!data) return setUsers(null);

    const { items } = data;

    setUsers(items || null);
  }, [search, session]);

  useEffect(() => {
    const timeout = setTimeout(() => getUsers(), 350);
    return () => clearTimeout(timeout);
  }, [getUsers]);

  const refetch = () => getUsers();

  return { users, refetch };
}

export default useUsers;
