import * as React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import myResume from '../assets/Caitlin_Ash _ Resume.pdf';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: "#f5f5f5",
      }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#f5f5f5',
                    "&:hover": { backgroundColor: '#b9b3af' },
                    fontWeight: 600,
                    backgroundColor: '#222'
                }
            }
        }
    }
  });

function Resume() {
    const [ pdfUrl, setPdfUrl ] = useState(myResume);

    const onDownload = () => {
        const link = document.createElement('a');
        link.download = `Caitlin_Ash_Resume.pdf`;
        link.href = myResume;
        link.click();
    };

    return (
        <ThemeProvider theme={theme}>
             <Box className='button-container'>
                <input
                    type="text"
                    value={pdfUrl}
                    onChange={(e) => setPdfUrl(e.target.value)}
                    placeholder="Enter PDF URL"
                />
                <Box className='worker'>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={pdfUrl} />
                    </Worker>
                </Box>
                <Button onClick={onDownload}
                    variant='contained' 
                    endIcon={<DownloadIcon />}
                >
                    Download Resume
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default Resume;