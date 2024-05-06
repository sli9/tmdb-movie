import {createTheme} from "@mantine/core";

export const theme = createTheme({
    fontFamily: 'Inter, sans-serif',
    fontSmoothing: true,
    headings: {
        fontWeight: '700',
        sizes: {
            h2: {fontSize: '32px'}, // heading for name of page
            h3: {fontSize: '20px', fontWeight: '600'} // heading for title of movie
        },
    },
    defaultRadius: '8px',
});
