import { Container } from 'components/Logout';
import { signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const SECONDS = 15;

const toHome = () => Router.push('/');

function LogOut() {
  const { data: session } = useSession();
  const [time, setTime] = useState(SECONDS);

  useEffect(() => {
    if (session) signOut();
    else setTimeout(toHome, SECONDS * 1000);
  }, [session]);

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
      <button className="redirect" onClick={toHome}>
        Redirect
      </button>
    </Container>
  );
}

export default LogOut;
