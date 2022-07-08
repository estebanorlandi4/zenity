import { createContext } from 'react';

import { useIcons } from 'hooks/github';
import { IGithubIcons } from 'utils/interfaces';

const IconsContext = createContext<IGithubIcons | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const IconsProvider = ({ children }: Props) => {
  const { icons } = useIcons();
  return (
    <IconsContext.Provider value={icons}>{children}</IconsContext.Provider>
  );
};

export default IconsContext;
