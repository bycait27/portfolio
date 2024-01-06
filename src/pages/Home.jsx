import { TypeAnimation } from "react-type-animation";

import image from "../assets/notes.jpeg";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Typography,
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

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Box className='big-big-container'>
                <Box className='big-container'>
                <TypeAnimation className='hello-2'
                        sequence={[
                            'HI, I\'M CAITLIN,\nA FULL-STACK\nWEB DEVELOPER',
                            1000
                        ]}
                        speed={25}
                        style={{
                            display: 'inline-block',
                            whiteSpace: 'pre-line',
                            textAlign: 'center',
                            fontWeight: 900,
                            color: '#222',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1
                        }}
                        repeat={Infinity}
                    />
                </Box>
                <Box className='image-container'>
                    <img className='image' src={image} />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Home;