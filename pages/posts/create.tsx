import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../../components/layout'
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { useSession, signIn, signOut } from "next-auth/react"
import { stringAvatar } from '../../lib/utils'
import { useState, useEffect } from 'react'
import { isConstructorDeclaration } from 'typescript'

export default function Home() {

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [id, setId] = useState<string>('');

  const handleTitle = (event: any) => {
    setTitle(event.target.value)
  }
  const handleContent = (event: any) => {
    setContent(event.target.value)
  }
  const handleId = (event: any) => {
    setId(event.target.value)
  }

  const handlePost = async () => {
    const res = await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: content,
        id: id
      })
    })
    //console.log("hey")
  }

  const { data: session } = useSession();

  if (session) {
    console.log(session)
    return (
      <Layout>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>

        <Paper sx={{ p: 2, m: 2, backgroundColor: '#caf990' }}>
          <Box sx={{ display: 'flex' }}>

            <Box sx={{ display: 'inline-block', verticalAlign: 'middle', p: 1 }}>
              <Avatar {...stringAvatar(session.user?.name || '')} src={"/authors/" + session.user?.name?.toLocaleLowerCase().split(' ').join('_')} />
            </Box>
            <Box sx={{ verticalAlign: 'middle', display: 'inline', my: 'auto' }}>
              <Typography>
                {session.user?.name}
              </Typography>
            </Box>
          </Box>
        </Paper>

        <article>
          <Box sx={{ p: 5 }}>
            <Box sx={{ display: 'flex', pb: 2 }}>
            <TextField id="standard-basic" color="secondary" label="Titre" variant="standard" onChange={handleTitle} />
            <TextField id="standard-basic" color="secondary" label="ID" variant="standard" onChange={handleId} />
            </Box>
            <TextField id="standard-basic" color="secondary" label="Texte" multiline variant="standard" onChange={handleContent} />
            <Box sx={{ flexGrow: 1, p: 3 }} />
            <Button variant="contained" color='secondary' onClick={handlePost}>Post</Button>
          </Box>
        </article>

      </Layout>
    )
  }
  return (
    <Layout>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </Layout>
  )
}
