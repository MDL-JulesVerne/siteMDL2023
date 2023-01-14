// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../../lib/posts';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'GET') return res.status(405).json({id: 'bad method', error: 'Please use get method' });
    
    // const { id } = req.query
    // console.log(req.query)
    // if (!id || typeof id !== 'string') return res.status(400).json({id: 'bad query', error: 'Please, the query "id" must be a string' });
    const data = await getSortedPostsData()
    if (!data) return res.status(400).json({id: 'not found', error: 'The post id don\' exist' });
    res.status(200).json(data)
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'A error occured' });
  }
}
