import {createTheme, CSSVariablesResolver} from "@mantine/core";

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
    colors: {
        gray: ['#FFFFFF', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#232134', '', '', ''],
        purple: ['#F2ECFA', '#E5D5FA', '#D1B4F8', '#BD93F7', '#9854F6', '#541F9D', '', '', '', ''],
        yellow: ['#FAB005', '', '', '', '', '', '', '', '', ''],
    },
    defaultRadius: '8px',
});

export const resolver: CSSVariablesResolver = (theme) => ({
    variables: {
        '--mantine-color-purple-100': theme.colors.purple[0],
        '--mantine-color-purple-200': theme.colors.purple[1],
        '--mantine-color-purple-300': theme.colors.purple[2],
        '--mantine-color-purple-400': theme.colors.purple[3],
        '--mantine-color-purple-500': theme.colors.purple[4],
        '--mantine-color-purple-600': theme.colors.purple[5],
    },
    dark: {},
    light: {}
})
