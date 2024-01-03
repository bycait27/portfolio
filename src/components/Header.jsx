import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
    Avatar,
    Box
} from "@mui/material";

import NavBar from "./NavBar";

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
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',
                    color: '#f5efe8',
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
            <Box className='header-container'>
                <Avatar variant='rounded' className='avatar'>
                    CA
                </Avatar>
                <NavBar />
            </Box>
        </ThemeProvider>
    );
};

export default Header;