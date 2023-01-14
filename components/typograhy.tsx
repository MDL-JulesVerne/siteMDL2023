import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import MuiTypography from "@mui/material/Typography"
import React from "react"

export const titleFont = responsiveFontSizes(createTheme({
    typography: {
        fontFamily: [
            'Fira Sans',
            'sans-serif',
        ].join(','),
    },
}));

export default function Typography({ children, title, id, ...props }: React.PropsWithChildren<{ title?: any, [k: string]:any, id?: string}>) {
    if (title) {
        return (
            <ThemeProvider theme={titleFont}>
                <MuiTypography {...props}>
                    {children}
                </MuiTypography>
            </ThemeProvider>
        )
    } else {
        return (
                <MuiTypography {...props}>
                    {children}
                </MuiTypography>
        )
    }
}