import { signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';

function LogOut() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) signOut();
    else Router.push('/');
  }, [session]);

  return <div>LogOut</div>;
}

export default LogOut;
