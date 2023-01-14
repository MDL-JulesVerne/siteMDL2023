import { Box, Divider, Stack, Typography } from "@mui/material";
//import Typography from "./typograhy";
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";


export default function Footer() {
    return (
        <Box sx={{ backgroundColor: 'secondary.dark', p: 1, width: '100%', textAlign: 'center' }}>
            <Link href="https://www.instagram.com/mdljulesverne_nantes/">
                <InstagramIcon fontSize="large" color="primary" />
            </Link>
            <Typography>Maison Des Lycéens de Jules Verne</Typography>
            <Typography sx={{}}><Link href={'mailto:mdljulesvernes@gmail.com'}>mdljulesvernes@gmail.com</Link></Typography>
            <Stack direction="row" spacing={2} sx={{px: 'auto', alignItems: 'center', justifyContent: 'center'}} divider={<Divider orientation="vertical" flexItem />}>
                <Typography><Link href={'/'}>Accueil</Link></Typography>
                <Typography><Link href={'/mentions'}>Mentions Légales</Link></Typography>
                <Typography><Link href={'/posts'}>Articles</Link></Typography>
            </Stack>
        </Box>
    )
}