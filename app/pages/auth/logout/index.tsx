import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

function LogOut() {
  const { data: session } = useSession();

  useEffect(() => {
    signOut();
  }, []);

  return <div>LogOut</div>;
}

export default LogOut;
