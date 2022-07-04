export const toClipboard = (value: any) => {
  const str = typeof value === 'string' ? value : String(value);
  navigator.clipboard.writeText(str);
};
