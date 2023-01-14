// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPostData } from '../../../lib/posts';
import * as fs from "fs"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        console.log('get')
        if (req.method !== 'POST') return res.status(405).json({ id: 'bad method', error: 'Please use post method' });
        const session = await unstable_getServerSession(req, res, authOptions)

        if(!session) return res.status(403).json({ id: 'unallowed', error: 'Please use post method' });    
        console.log(req.body);

        
        await fs.writeFileSync(`./posts/${req.body.id}.md`, `---
title: '${req.body.title}'
date: '${new Date().toDateString()}'
author: 'Hello Wordl'
---

${req.body.content}
`)

        res.status(200).json({ message: 'succes' })
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'A error occured' });
    }
}
