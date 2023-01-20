import { Paper, Box, Typography, Divider, Button } from "@mui/material";

const colors = ["#caf990", "#90caf9", "#F990CA"];

export function New({ title, desc, id }: { title: string, desc: string, id?: string }) {
    return (
        <Paper sx={{ p: 2, display: 'flex', ':hover': { boxShadow: 5 }, backgroundColor: '#bdbdbd' }} elevation={2}>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', py: 'auto' }} >
                <Typography variant='h6' sx={{ textDecoration: 'underline' }}>{title}</Typography>
                <Divider variant="middle" orientation="vertical" sx={{ p: 1 }} />
                <Typography sx={{ display: { xs: 'none', md: 'flex' }, p: 1 }}> {desc} </Typography>
            </Box>
            <Button variant='contained' color='secondary' sx={{ textAlign: 'rigth' }} href={'/posts/' + id}>lire</Button>
        </Paper>
    )
}