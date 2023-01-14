import { Box, createTheme } from "@mui/material";
import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children, page }: React.PropsWithChildren<{ page?: string }>) {

    return (
        <div>
            <Head>


                <meta name="viewport" content="initial-scale=1, width=device-width" />

                <title>{`MDL Jules Verne ${page ? `• ${page}` : ''}`}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main>
                <Navbar />
                <Box sx={{ background: 'background.default', backgroundPosition: "center", backgroundSize: "cover", minHeight: "100vh"}} component="main">

                    {children}

                </Box>
                <Footer />
            </main>
        </div>
    )
}
