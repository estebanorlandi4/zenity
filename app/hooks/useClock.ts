import { useEffect, useState } from 'react';
import { IDate } from '../utils/interfaces';

const addZero = (value: number): string =>
  value < 10 ? `0${value}` : String(value);

const parseDate = (server?: number): IDate => {
  const date = new Date();

  const hh: string = addZero(date.getHours());
  const mm: string = addZero(date.getMinutes());
  const ss: string = addZero(date.getSeconds());

  const dd: string = date.getDate().toString();
  const DD: string = date.getDay().toString();
  const MM: string = date.getMonth().toString();
  const YY: string = date.getFullYear().toString();

  return { hh, mm, ss, dd, DD, MM, YY };
};

function useClock(server: number): IDate | null {
  const [date, setDate] = useState<IDate | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setDate(parseDate()), 1000);
    return () => clearInterval(interval);
  }, []);

  return date;
}

export default useClock;
