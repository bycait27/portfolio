import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Toolbar,
    AppBar,
    Avatar,
    Button
} from "@mui/material";

import { Link } from 'react-router-dom';

import NavBar from "./NavBar";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f5f5f5",
        },
    },
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',
                    color: '#f5f5f5',
                    fontWeight: 'bolder',
                    height: 50,
                    width: 50,
                    margin: 2,
                    '&:hover': { backgroundColor: '#b9b3af', color: '#222' }
                }
            }
        }
    }
});

function Header() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position='fixed'>
                    <Toolbar>
                        <Button
                        component={Link}
                        to='/'
                        >
                            <Avatar variant='rounded' className='avatar'>
                                CA
                            </Avatar>
                        </Button>
                        <NavBar />
                    </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;