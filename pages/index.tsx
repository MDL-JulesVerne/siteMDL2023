import Head from 'next/head';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, Skeleton, Stack } from '@mui/material'
import Typography from '../components/typograhy'
import { New } from '../components/new'
import { useState, useEffect } from 'react'


export default function Home() {

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
    <>
      <Layout>
        <Box sx={{
          py: 10,
          textAlign: 'center',
        }}>

          <Typography variant='h1' title sx={{ textDecoration: 'underline', 'span': { fontFamily: "Fiera" } }}>La <span>M</span>aison <span>D</span>es <span>L</span>ycéens</Typography>
          <Box sx={{ textAlign: 'right', px: 10 }}>
            <Typography variant='body'>Lycée Jules-Verne 44000 Nantes</Typography>
          </Box>
        </Box>

        <Box sx={{ m: 5 }}>
          <Typography variant='h2' sx={{ p: 2 }} title id='kesaco'>La MDL c&apos;est quoi ?</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, backgroundColor: '#9ccc65', ':hover': { boxShadow: 5 } }}>
                <CardContent>
                  <Typography variant='h3' >Un lieu :</Typography>
                  <Typography variant='body1'>La MDL est située dans une salle de taille moyenne au rez-de-chaussée dans l&apos;enceinte du lycée. Cette salle confortablement aménagée est un lieu tranquille pour les lycéens, ils peuvent y travailler, se reposer ou jouer.</Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>

            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, backgroundColor: '#ffca28', ':hover': { boxShadow: 5 } }}>
                <CardContent>
                  <Typography variant='h3' >Une équipe :</Typography>
                  <Typography variant='body1'>La Maison Des Lycéen de Jules Verne est une association à part entière. Ainsi, la MDL possède un bureau composé d&apos;un ou d&apos;une présidente, d&apos;un ou d&apos;une trésorière et de secrétaires. Chacun de ces rôles est accompagné d&apos;adjoint pouvant prendre la relève les années suivantes. Tous digne de confiance, car ils sont élus en début d&apos;année par les élèves. La MDL est donc totalement autonome, composée par et pour les élèves (sous la surveillance discrète et bienveillante du CPE).</Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, backgroundColor: '#26a69a', ':hover': { boxShadow: 5 } }}>
                <CardContent>
                  <Typography variant='h3' >Des projets :</Typography>
                  <Typography variant='body1'>La MDL organise tous les ans différents projets pour les lycéens. Les membres de la MDL organisent eux-mêmes les projets, de leur conception à leur dénouement en passant par la planification. Pour cela, ils ont à disposition le budget de la MDL pour diverses fournitures, réservations ou autres et peuvent utiliser les locaux du lycée au besoin (avec évidement l&apos;autorisation du chef d&apos;établissement). Comme par exemple, le bal de promo annuel réservé aux terminals ou le père Noël secret.</Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ m: 5 }}>
          <Typography variant='h2' sx={{ p: 2 }} title id='info'>Dernières informations</Typography>
          <Stack spacing={2}>
            {new Array(5).fill(0).map((_, i) => isLoading && (
              <Skeleton variant="rectangular" width={'100%'} key={i}><New title={''} desc={''} id={''} /></Skeleton>
            ))}
            {data && data.map((d, i) => <New title={d.title} desc={d.desc + '...'} id={d.id} key={i}/>)}
          </Stack>
        </Box>
      </Layout>
    </>
  )
}
