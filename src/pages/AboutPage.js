import React from "react";

import { Box, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box p={1}>
      <Typography variant="h4" component="h2">
        Equipo de desarrollo:
      </Typography>
      <ul>
        <li>Ticky (Project manager)</li>
        <li>Yayis (Product owner)</li>
        <li>Gustavo Loera (Main Developer)</li>
        <li>Nancy Sarahi (Ideas)</li>
      </ul>
      <Typography variant="caption">Version 1.1.0</Typography>
      <Typography>Made with ❤️ by GALV</Typography>
    </Box>
  );
};

export default AboutPage;
