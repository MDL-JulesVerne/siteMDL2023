import Head from 'next/head'
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
            <Typography variant='body'>Jules-Verne 44000 Nantes</Typography>
          </Box>
        </Box>

        <Box sx={{ m: 5 }}>
          <Typography variant='h2' sx={{ p: 2 }} title id='kesaco'>La MDL c'est quoi ?</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>

              <Card sx={{ minWidth: 275, backgroundColor: '#caf990', ':hover': { boxShadow: 5 } }}>
                <CardContent>
                  <Typography variant='h3' >Un lieu :</Typography>
                  <Typography variant='body1'>La MDL est basé dans une salle de taille moyenne au rez-de-chaussé dans l'enceinte du lycée. Cette salle confortablement aménager est un lieu tranquille pour les lycéens, ils peuvent y travailler, se reposer ou jouer.</Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>

            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minWidth: 275, backgroundColor: '#90caf9', ':hover': { boxShadow: 5 } }}>
                <CardContent>
                  <Typography variant='h3' >Une équipe :</Typography>
                  <Typography variant='body1'>La Maison Des Lycéen de Jules Verne est un association a part entière. Ainsi la MDL possède un bureau composé d'un ou d'une présidente, d'un ou d'une trésorière et de secrétaires. Chacun de ces rôles sont accompagné d’adjoint pouvant prendre la relève les années suivantes. Tous digne de confiance car élut en début d'année par les élèves. La MDL est donc totalement autonome, composé par et pour les élèves (sous la surveillance discrete et bienveillante du CPE)</Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ minWidth: 275, backgroundColor: '#F990CA', ':hover': { boxShadow: 5 } }}>
                <CardContent>
                  <Typography variant='h3' >Des projets :</Typography>
                  <Typography variant='body1'>La MDL organise tous les ans différents projet pour les lycéens. Les membres de la MDL organisent eux-même les projets, de leur conception a leur dénouement en passant par la planification. Pour cela ils ont a disposition le budget de la MDL pour diverse fourniture, réservation ou autres et peuvent utiliser les locaux du lycée au besoin de même (avec évidement l'autorisation du chef d’établissement). Ainsi, il y a, eu et aura l'annuel bal de promo réservé aux terminals, père noël secret pour les secondes ou journée sans cartable tous le monde entre autres. </Typography>
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
            {new Array(5).fill(0).map((_, i) => isLoading || !(data && data[i]) || false ? (
              <Skeleton variant="rectangular" width={'100%'} key={i}><New title={''} desc={''} id={''} /></Skeleton>
            ) : (
              <New title={data[i].title} desc={data[i].desc + '...'} id={data[i].id} />
            ))}
          </Stack>
        </Box>
      </Layout>
    </>
  )
}
