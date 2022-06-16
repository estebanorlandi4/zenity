import { useEffect, useState } from 'react';
import { getLocal, saveLocal } from '../utils/storage';
import { IPage } from '../utils/interfaces';

const KEY = 'favorites';

function useFavorites() {
  const [favorites, setFavorites] = useState<IPage[]>([]);

  useEffect(() => {
    setFavorites(getLocal(KEY) || []);
    return () => setFavorites([]);
  }, []);

  const addSite = (site: IPage) => {
    if (!site) return null;
    if (favorites.length >= 8) return null;

    saveLocal(KEY, [...favorites, { ...site, _id: String(Math.random()) }]);
    setFavorites(getLocal(KEY));

    return site;
  };

  const removeSite = (id: string) => {
    if (!id) return null;
    const aux = favorites.filter((favorite) => favorite._id !== id);

    setFavorites(aux);
    saveLocal(KEY, aux);
  };

  return {
    favorites,
    addSite,
    removeSite,
  };
}

export default useFavorites;
