import type { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).send({ hello: 'world' });
};
