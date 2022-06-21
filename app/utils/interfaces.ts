export interface IDate {
  hh: string;
  mm: string;
  ss: string;

  dd: string;
  DD: string;
  MM: string;
  YY: string;
}

export interface IShortcut {
  _id?: string;
  name: string;
  url: string;
}

export interface ITag {
  value: string;
  id: string;
}
