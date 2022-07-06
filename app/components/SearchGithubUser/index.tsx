import Input from 'components/Input';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Change } from 'utils/interfaces';
import searchGithubUser from 'utils/searchGithubUser';
import { Container, User, Users } from './styled';

function SearchGithubUser() {
  const [users, setUsers] = useState<any[] | null>(null);
  const [search, setSearch] = useState<string>('');
  const { data: session } = useSession();

  const promise = useCallback(async () => {
    const { items } = await searchGithubUser({ query: search, session });
    setUsers(items ?? []);
  }, [search, session]);

  useEffect(() => {
    const timeout = setTimeout(() => promise(), 350);
    return () => clearTimeout(timeout);
  }, [promise]);

  const handleSearch = ({ target: { value } }: Change) => setSearch(value);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    promise();
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
        {users &&
          users.map(({ id, login, avatar_url, html_url }) => (
            <li key={id}>
              <User href={html_url}>
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
      </Users>
    </Container>
  );
}

export default SearchGithubUser;
