import { useState } from "react";
import * as React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { 
    Grid, 
    Card, 
    CardContent, 
    Box, 
    TextField, 
    Button,
    Typography 
} from "@mui/material";
import { validateEmail } from "../utils/helper";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: '#f5f5f5'
      }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // color: '#f5f5f5',
                    bgcolor: '#222',
                    "&:hover": { bgcolor: '#b9b3af' },
                    paddingRight: 5,
                    paddingLeft: 5,
                    fontWeight: 'bolder'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#b9b3af',
                    borderRadius: 5,
                    margin: 4,                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    paddingTop: 30,
                    color: '#f5f5f5',
                    fontSize: 'x-large',
                    textAlign: 'center',
                    fontWeight: 'bolder',
                    margin: 15
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f5f5f5',
                }
            },
            defaultProps: {
                label: "Outlined secondary", 
                color: "secondary"
            }
        }
    }
  });

function Contact() {
    const form = useRef();

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [ responseMessage, setResponseMessage ] = useState({
        message: '',
        type: '',
    });

    const [ loading, setLoading ] = useState(false);

    const [ formErrors, setFormErrors ] = useState({
        name: false,
        email: false, 
        message: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: false,
        });
    };

    const handleBlur = (e) => {
        if (e.target.name == 'name' && !formData.name) {
            setResponseMessage({
                message: 'Please enter your name',
                type: 'warning',
            })
        }

        e.target.name == 'email' && !formData.email 
        ? setResponseMessage({
            message: 'Please enter your email address',
            type: 'warning',
        })
        : console.log('success');

        e.target.name == 'message' && !formData.message
        ? setResponseMessage({
            message: 'Please enter a message',
            type: 'warning',
          })
        : console.log('success');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (formData.name.trim() === '') {
            errors.name = true;
        } else if (!validateEmail(formData.email)) {
            errors.email = true;
        } else if (formData.message.trim() === '') {
            errors.message = true;
        }
    
        if (Object.values(errors).some((error) => error)) {
            setFormErrors(errors);
            return;
        }

        setFormData({
            name: '',
            email: '',
            message: '',
        });

        console.log('Form submitted successfully!');

        setLoading(true);

        const formElement = form.current;

        const publicKey = 'Toj_dRAO8_gplHDSU';

        emailjs.sendForm('service_hik78gj', 'template_7nrtoq1', formElement, publicKey)
        .then(
            (result) => {
                console.log(result.text);
                setResponseMessage({ message: '', type: '' });
                setLoading(false);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <ThemeProvider theme={theme}>
                    <Box 
        className="form-container" 
        sx={{ width: '100%', marginBottom: 28 }}
        >
            <Typography>
                Contact me
            </Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item sm={10} md={10} lg={7} textAlign={'center'}>
                    <Card>
                        <CardContent>
            <form ref={form} onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={formErrors.name}
                    helperText={formErrors.name ? 'Name is required' : ''}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={formErrors.email}
                    helperText={formErrors.email ? 'Enter a valid email address' : ''}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={formErrors.message}
                    helperText={formErrors.message ? 'Message is required' : ''}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                />
                <Button
                    onClick={handleSubmit}
                    loading={loading}
                    loadingPosition="end"
                    type="submit"
                    variant="contained"
                >
                    Send
                </Button>
            </form>
            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>
    );
}

export default Contact;