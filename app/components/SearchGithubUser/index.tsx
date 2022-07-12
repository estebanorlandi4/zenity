import { FormEvent, KeyboardEvent, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

import Input from 'components/Input';
import useUsers from 'hooks/github/useUsers';
import { Change } from 'utils/interfaces';

import { Container, User, Users, variants } from './styled';

function SearchGithubUser() {
  const [search, setSearch] = useState('');
  const { users, refetch } = useUsers({ search });

  const handleSearch = ({ target: { value } }: Change) => {
    setSearch(value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const removeSearch = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Escape') setSearch('');
  };

  return (
    <Container>
      <form className="search" onSubmit={handleSubmit}>
        <Input
          value={search}
          onChange={handleSearch}
          onKeyDown={removeSearch}
          type="text"
          placeholder="User"
          className="search-input"
        />
      </form>

      {users && (
        <Users>
          <AnimatePresence>
            {users.map(({ id, login, avatar_url, html_url }, i) => (
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
      )}
    </Container>
  );
}

export default SearchGithubUser;
