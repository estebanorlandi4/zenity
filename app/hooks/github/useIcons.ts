import { Octokit } from '@octokit/rest';
import { useEffect, useState } from 'react';

function useIcons() {
  const [icons, setIcons] = useState<{ [icon: string]: string } | null>(null);

  useEffect(() => {
    const promise = async () => {
      const octokit = new Octokit();
      const { data: emojis } = await octokit.request('GET /emojis');
      setIcons(emojis);
    };

    promise();
  }, []);

  return {
    icons,
  };
}

export default useIcons;
