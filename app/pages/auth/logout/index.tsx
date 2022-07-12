import { Container } from 'components/Logout';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
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
    const interval = setInterval(() => time && setTime(time - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <Container>
      <div className="decoration-container">
        <Image
          layout="fill"
          className="decoration"
          src="/static/decoration2.png"
          alt=""
        />
      </div>

      <div className="message">
        <div className="text">
          <h2>Logged out</h2>
          <p>Redirection in {time} seconds</p>
          <button onClick={toHome} className="instant">
            Go home
          </button>
        </div>
      </div>
    </Container>
  );
}

export default LogOut;
