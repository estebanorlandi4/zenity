import connectDB from 'config/db';
import { getSession } from 'next-auth/react';
import handlerFactory from 'utils/handlerFactory';
import { IMethods, IRoute } from 'utils/interfaces';

connectDB();

const createSite = async ({ req, res }: IRoute) => {
  try {
    const session = await getSession({ req });

    res.json({ meta: { success: true }, session });
  } catch (err) {
    res.json({ meta: { succes: false }, err });
  }
};

const methods: IMethods = {
  GET: createSite,
};

export default handlerFactory(methods);
