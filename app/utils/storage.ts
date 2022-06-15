export const getLocal = (key: string): any => {
  if (!key) return null;

  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

export const saveLocal = (key: string, value: any) => {
  if (!value || !key) return null;

  const valueStr = JSON.stringify(value);
  localStorage.setItem(key, valueStr);
  return getLocal(key);
};

export const removeLocal = (key: string) => {
  if (!key) return null;
  const value = getLocal(key);
  if (!value) return null;

  localStorage.removeItem(key);
  return value;
};
