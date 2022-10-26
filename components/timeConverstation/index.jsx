import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { styles } from "./styles.js";
import SearchIcon from "@mui/icons-material/Search";

export const TimeConverstation = () => {
  return (
    <Grid container mt={9}>
      <Grid item lg={6}>
        <Box style={styles.agent}>CHAT WITH AN AGENT</Box>
        <Box style={styles.chooseAgent}>Real Time Conversation</Box>
        <Box style={styles.intro}>
          You should choose an agent you are comfortable working with and who
          you feel has your best interests at heart. you should be able to get
          your best agent by considering the following simple steps:
        </Box>
        <Box display="flex" alignItems="center" mt={3}>
          <img src="./bullot.png" />
          <Box style={styles.bullots}>
            How and where your property will be advertised
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <img src="./bullot.png" />
          <Box style={styles.bullots}>
            Filter the results base on your interests
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <img src="./bullot.png" />
          <Box style={styles.bullots}>
            Select and contact your best match agent
          </Box>
        </Box>
        <Button style={styles.findButton}>
          <SearchIcon style={{ color: "white" }} />
          <Box style={styles.buttonText}>Find an agent</Box>
        </Button>
      </Grid>
      <Grid item lg={6}>
        <img src="./agents.png" width="100%" />
      </Grid>
    </Grid>
  );
};
