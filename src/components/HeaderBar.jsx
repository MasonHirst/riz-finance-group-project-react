import React from "react";

import { AppBar, Typography, CssBaseline, Toolbar, Stack, Button } from "@mui/material";

const HeaderBar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{bgColor: "white"}}>
          <Stack 
          direction="row-reverse"
        > 
        <Toolbar>
          <Stack child spacing={8} direction="row">
            <Button variant="text">About</Button>
            <Button variant="text">Help</Button>
            <Button variant="text">Contact Us</Button>
          </Stack>
        </Toolbar>
          </Stack>
      </AppBar>
    </>
  );
};

export default HeaderBar;
