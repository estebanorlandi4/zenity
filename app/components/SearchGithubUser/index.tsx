import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, Variants } from 'framer-motion';

import Input from 'components/Input';
import useUsers from 'hooks/github/useUsers';
import { Change } from 'utils/interfaces';

import { Container, User, Users } from './styled';

const variants: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  show: ({ delay }) => ({
    x: 0,
    opacity: 1,

    transition: { delay },
  }),
  toLeft: {
    x: '100%',
    scale: 0,
  },
};

function SearchGithubUser() {
  const [search, setSearch] = useState('');
  const { users, refetch } = useUsers({ search });

  const handleSearch = ({ target: { value } }: Change) => setSearch(value);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Container>
      <form className="search" onSubmit={handleSubmit}>
        <Input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="User"
          className="search-input"
        />
      </form>

      <Users>
        <AnimatePresence>
          {users &&
            users.map(({ id, login, avatar_url, html_url }, i) => (
              <li key={id}>
                <User
                  initial="hidden"
                  animate="show"
                  exit="toLeft"
                  variants={variants}
                  custom={{ delay: i * 0.15 }}
                  href={html_url}
                >
                  <div className="avatar-container">
                    <Image
                      className="avatar"
                      layout="fill"
                      src={avatar_url}
                      alt={login}
                    />
                  </div>
                  <p>{login}</p>
                </User>
              </li>
            ))}
        </AnimatePresence>
      </Users>
    </Container>
  );
}

export default SearchGithubUser;
