import { Box } from "@mui/material";
import React from "react";
import landingpagephoto from "../images/landingpagephoto.gif";

export function Home() {
    return (
        <Box
            component="img"
            src={landingpagephoto}
            alt="Landing page image"
            style={{ width: "100%", height: "auto", maxWidth: "100%" }}
        />
    );
}

export default Home;