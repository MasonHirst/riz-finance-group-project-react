import React from "react";
import HeaderBar from "../components/HeaderBar";

import { Card, CssBaseline, Typography, Stack } from "@mui/material";

// TODO This is just the skeleton for what I need to put in. I still need MUI to actually create the dashboard page.

const DashBoard = () => {
  return (
    <>
      <HeaderBar />
      <CssBaseline />
      <Stack
        direction="row-reverse"
        alignItems="center"
        spacing={6}
        sx={{ paddingRight: "5rem", height: "100vh" }}
      >
        <Stack children spacing={5}>
          <Card
            variant="outlined"
            sx={{
              minWidth: "40rem",
              height: "15rem",
              padding: ".5rem",
              borderRadius: "1rem",
            }}
          >
            <Typography variant="h5" align="left">
              Trends
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              minWidth: "40rem",
              height: "15rem",
              padding: ".5rem",
              borderRadius: "1rem",
            }}
          >
            <Typography variant="h5" align="left">
              Goals
            </Typography>
          </Card>
        </Stack>
        <Stack children spacing={5}>
          <Card
            variant="outlined"
            sx={{
              minWidth: "15rem",
              height: "20rem",
              padding: ".5rem",
              borderRadius: "1rem",
            }}
          >
            <Typography variant="h5" align="left">
              Budget
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              minWidth: "15rem",
              height: "20rem",
              padding: ".5rem",
              borderRadius: "1rem",
            }}
          >
            <Typography variant="h5" align="left">
              Transactions
            </Typography>
          </Card>
        </Stack>
      </Stack>
    </>
  );
};

export default DashBoard;
