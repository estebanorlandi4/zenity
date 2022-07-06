import { useEffect, useState } from 'react';
import { getLocal, saveLocal } from '../utils/storage';
import { IShortcut } from '../utils/interfaces';

const KEY = 'zenity.favorites';

function useShortcuts() {
  const [shortcuts, setShortcuts] = useState<IShortcut[]>([]);

  useEffect(() => {
    setShortcuts(getLocal(KEY) || []);
    return () => setShortcuts([]);
  }, []);

  const addShortcut = (site: IShortcut) => {
    if (!site) return null;
    if (shortcuts.length >= 8) return null;

    saveLocal(KEY, [...shortcuts, { ...site, _id: String(Math.random()) }]);
    setShortcuts(getLocal(KEY));

    return site;
  };

  const removeSite = (id: string) => {
    if (!id) return null;
    const aux = shortcuts.filter((shortcut) => shortcut._id !== id);

    setShortcuts(aux);
    saveLocal(KEY, aux);
  };

  return {
    shortcuts,
    addShortcut,
    removeSite,
  };
}

export default useShortcuts;
