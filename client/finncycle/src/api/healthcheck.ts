import type { NextApiRequest, NextApiResponse } from 'next';

const healthcheck = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ status: 'ok' });
};

export default healthcheck;
