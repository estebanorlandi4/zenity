import { NextApiRequest, NextApiResponse } from 'next';
import { IMethods } from './interfaces';

function handlerFactory(methods: IMethods) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const route = method ? methods[method] : null;

    if (route) await route({ req, res });
    else
      res.json({
        meta: {
          succes: false,
          message: 'Route not found.',
        },
      });
  };
}

export default handlerFactory;
