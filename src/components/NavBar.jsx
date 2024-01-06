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
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bolder',
                    my: 2,
                    display: 'flex',
                    // fontSize: 'medium',
                    "&:hover": { color: 'grey' }
                }
            }
        },
    }
});

const pages = ['about', 'projects', 'skills', 'resume'];

function NavBar() {
    const currentPage = useLocation().pathname;
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'right' 
                }}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    component={Link}
                    to={`/${page}`}
                    sx={{
                        color: currentPage === `/${page}` ? '#b9b3af' : '#222',
                        fontSize: 'medium',
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
                    '&:hover': { bgcolor: '#b9b3af', color: '#222' },
                    color: '#f5f5f5',
                    bgcolor: '#222',
                    borderRadius: 5,
                    marginLeft: 2,
                    color: currentPage === '/contact' ? '#b9b3af' : '#f5f5f5'
                }}
                >
                    contact me
                </Button>
            </Box>
        </ThemeProvider>
    );
};

export default NavBar;