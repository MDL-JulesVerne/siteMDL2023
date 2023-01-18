import { Box, Divider, Link, Stack, Typography } from "@mui/material";
//import Typography from "./typograhy";
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Footer() {
    return (
        <Box sx={{ backgroundColor: 'secondary.dark', p: 1, width: '100%', textAlign: 'center' }}>
            <Link href="https://www.instagram.com/mdljulesverne_nantes/">
                <InstagramIcon fontSize="large" color="primary" />
            </Link>
            <Typography>Maison Des Lycéens de Jules Verne</Typography>
            <Link href={'mailto:mdljulesvernes@gmail.com'} color="inherit">mdljulesvernes@gmail.com</Link>
            <Stack direction="row" spacing={2} sx={{px: 'auto', alignItems: 'center', justifyContent: 'center'}} divider={<Divider orientation="vertical" flexItem />}>
                <Link href="/" color="inherit">Accueil</Link >
                <Link href="/mentions" color="inherit">Mentions Légales</Link >
                <Link href="/posts" color="inherit">Articles</Link >
            </Stack>
        </Box>
    )
}