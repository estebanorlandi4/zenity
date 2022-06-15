import { useEffect, useState } from 'react';
import { IDate } from '../utils/interfaces';

const addZero = (value: number): string =>
  value < 10 ? `0${value}` : String(value);

const parseDate = (): IDate => {
  const date = new Date();

  const hh: string = addZero(date.getHours());
  const mm: string = addZero(date.getMinutes());
  const ss: string = addZero(date.getSeconds());

  return { hh, mm, ss };
};

function useClock(): IDate | null {
  const [date, setDate] = useState<IDate | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setDate(parseDate()), 1000);
    return () => clearInterval(interval);
  }, []);

  return date;
}

export default useClock;
