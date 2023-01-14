import Layout from '../components/layout'
import { getAllPostIds, getPostData, getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Avatar, Box, Paper, Skeleton, Stack, TextField } from '@mui/material'
import Typography from '../components/typograhy'
import { stringAvatar } from '../lib/utils'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { New } from '../components/new'

export default function Post() {

  const [data, setData] = useState<Array<{ title: string, date: string, author: string, id: string, desc: string }> | null>(null)
  const [displayData, setDisplayData] = useState<Array<{ title: string, date: string, author: string, id: string, desc: string }> | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/posts/list')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        setDisplayData(data)
      })
  }, [])

  const handleFiltre = (event: any) => {
    if(!data) return;
    const queryFilter = event.target.value;
    setDisplayData(data.filter(d => d.title.includes(queryFilter) || d.desc.includes(queryFilter) || d.author.includes(queryFilter)))
  }

  return (
    <Layout>
      <Head>
      </Head>

      
      <Box sx={{ p: 5 }}>
        <Box sx={{display: 'flex', p:1}}>
            <Typography title variant="h4">Articles</Typography>
            <Box sx={{flexGrow: 1}} />
            <Box sx={{}} >
                <TextField id="standard-basic" color="secondary" label="Filtre" variant="standard" onChange={handleFiltre} />
            </Box>
        </Box>
        <Stack spacing={2}>
          {new Array(5).fill(0).map((_, i) => isLoading && (
            <Skeleton variant="rectangular" width={'100%'} key={i}><New title={''} desc={''} id={''} /></Skeleton>
          ))}
          {displayData && displayData.map(d => <New title={d.title} desc={d.desc + '...'} id={d.id} />)}
        </Stack>
      </Box>

    </Layout >
  )
}