import {
    Stack,
    Typography,
    Box
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const theme = createTheme({
    // palette: {
    //     primary: {
    //         main: "#fff",
    //     },
    //     secondary: {
    //         main: "#000",
    //     },
    // },
    components: {
    }
});

function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <Box className='footer-container'>
                <Stack direction='row' spacing={1}>
                <a 
                href='https://github.com/bycait27' 
                target="_blank"
                >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                </a>
                <a 
                href='https://www.linkedin.com/in/caitlin-ash-14409423b/' 
                target="_blank"
                >
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                </a>
                </Stack>
                <Typography variant='body2' className='footer-text'>
                    © 2023 Caitlin Ash
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default Footer;