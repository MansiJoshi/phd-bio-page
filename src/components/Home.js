import { Box } from "@mui/material";
import React from "react";
import landingpagephoto from "../images/landingpagephoto.gif";

export function Home() {
    return (
        // <img src="Your address here.gif" style="width: 100%; max-width: 100%; height: auto;" />
        <Box
            component="img"
            src={landingpagephoto}
            alt="Landing page image"
            style={{ width: "100%", height: "auto" }}
        />
    );
}

export default Home;