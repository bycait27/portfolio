import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Toolbar,
    AppBar,
    Avatar,
    Box
} from "@mui/material";

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
                    margin: 2
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
                        <Avatar variant='rounded' className='avatar'>
                            CA
                        </Avatar>
                        <NavBar />
                    </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;