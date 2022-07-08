import { Types } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { ChangeEvent } from 'react';

export interface Change extends ChangeEvent<HTMLInputElement> {}

export interface IGithubIcons {
  [icons: string]: string;
}
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

export interface IRoute {
  req: NextApiRequest;
  res: NextApiResponse;
}

export interface IMethods {
  [method: string]: (_: IRoute) => any;
}

export interface ISite {
  user: Types.ObjectId;
  url: string;
  name: string;
}
