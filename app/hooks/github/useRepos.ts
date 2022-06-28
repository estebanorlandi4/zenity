import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

function useRepos() {
  const { data: session } = useSession();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const promise = async () => {
      if (repos.length) return null;
      const { data, headers } = await axios(
        `https://api.github.com/user/repos`,
        {
          headers: {
            accept: 'application/vnd.github.v3+json',
            Authorization: `token ${session?.accessToken}`,
          },
        },
      );

      console.log({ data, headers });
      setRepos(data);
    };
    if (session) promise();
  }, [repos.length, session]);

  return { repos };
}

export default useRepos;
