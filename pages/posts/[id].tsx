import Layout from '../../components/layout'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Avatar, Box, Paper, Skeleton, Stack } from '@mui/material'
import Typography from '../../components/typograhy'
import { stringAvatar } from '../../lib/utils'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { New } from '../../components/new'

export default function Post({
  postData, nextPosts
}: {
  postData: {
    title: string
    date: string
    author: string
    contentHtml: string,
    id: string,
  }, nextPosts: [{ title: string, date: string, author: string, id: string } | null, { title: string, date: string, author: string, id: string } | null]
}) {

  const [data, setData] = useState<Array<{ title: string, date: string, author: string, id: string, desc: string }> | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/posts/list')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Box sx={{ p: 5 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h2' title>{postData.title}</Typography>
          </Box>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Box>
      </article>

      <Paper sx={{ p: 2, m: 2, backgroundColor: '#caf990' }}>
        <Box sx={{ display: 'flex' }}>

          <Box sx={{ display: 'inline-block', verticalAlign: 'middle', p: 1 }}>
            <Avatar {...stringAvatar(postData.author)} src={"/authors/" + postData.author.toLocaleLowerCase().split(' ').join('_')} />
          </Box>
          <Box sx={{ verticalAlign: 'middle', display: 'inline', my: 'auto' }}>
            <Typography >
              {postData.author}
            </Typography>
          </Box>
        </Box>
        <Typography>{postData.date}</Typography>
      </Paper>
      <Box sx={{ p: 5 }}>
        <Typography title variant="h4">Suggestions</Typography>
        <Stack spacing={2}>
          {new Array(5).fill(0).map((_, i) => isLoading || !(data && data[i]) || false ? (
            <Skeleton variant="rectangular" width={'100%'} key={i}><New title={''} desc={''} id={''} /></Skeleton>
          ) : (
            <New title={data[i].title} desc={data[i].desc + '...'} id={data[i].id} />
          ))}
        </Stack>
      </Box>

    </Layout >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)

  return {
    props: {
      postData,
    }
  }
}