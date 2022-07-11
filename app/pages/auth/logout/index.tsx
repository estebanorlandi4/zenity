import { Container } from 'components/Logout';
import { signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const SECONDS = 15;

function LogOut() {
  const { data: session } = useSession();
  const [time, setTime] = useState(SECONDS);

  const redirect = useCallback(() => {
    Router.push('/');
  }, []);

  useEffect(() => {
    if (session) signOut();
    else setTimeout(redirect, SECONDS * 1000);
  }, [session, redirect]);

  useEffect(() => {
    if (time === 0) setTime(SECONDS);
    const interval = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <Container>
      <div className="text">
        <p>Redirection in</p> <span className="countdown">{time}</span>
      </div>
      <button className="redirect" onClick={redirect}>
        Redirect
      </button>
    </Container>
  );
}

export default LogOut;
