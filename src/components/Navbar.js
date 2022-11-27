import { AppBar, Link, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from "@mui/system";

const pages = ["Home", "About Me"];

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" component="nav" style={{ backgroundColor: "#000000" }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Mansi Thanki
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {
                                pages.map((page) => (
                                    <Button key={page}>
                                        <Link
                                            to={`/${page === "Home" ? "" : page}`}
                                            sx={{ my: 2, color: 'white', textDecoration: "none" }}
                                        >
                                            {page}
                                        </Link>
                                    </Button>
                                ))
                            }
                            <Button>
                                <Link
                                    href="https://www.linkedin.com/in/mansithanki/"
                                    style={{ lineHeight: 1.5, textDecoration: "none" }}
                                    target="__blank__"
                                >
                                    <LinkedInIcon style={{ color: "white" }} />
                                </Link>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Navbar;