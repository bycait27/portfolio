import { Link, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Button,
    Box
} from "@mui/material";

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

const pages = ['about', 'projects', 'skills', 'resume'];

function NavBar() {
    const currentPage = useLocation().pathname;
    return (
        <ThemeProvider theme={theme}>
            <Box className='nav-container'>
                {pages.map((page) => (
                    <Button
                    key={page}
                    component={Link}
                    to={`/${page}`}
                    sx={{
                        color: currentPage === `/${page}` ? '#b9b3af' : '#222'
                    }}
                    >
                        {page}
                    </Button>
                ))}
                <Button
                className='contact-me'
                component={Link}
                to='/contact'
                variant='contained'
                sx={{
                    '&:hover': { bgcolor: '#b9b3af' },
                    color: '#f5efe8',
                    borderRadius: 5,
                    marginLeft: 2,
                    color: currentPage === '/contact' ? '#b9b3af' : '#222'
                }}
                >
                    contact me
                </Button>
            </Box>
        </ThemeProvider>
    );
};

export default NavBar;