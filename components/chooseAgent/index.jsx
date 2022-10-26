import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { styles } from "./styles.js";
import SearchIcon from "@mui/icons-material/Search";
export const ChooseAgent = () => {
  return (
    <Grid container mt={9}>
      <Grid item lg={6}>
        <img src="./choose.png" width="100%" />
      </Grid>
      <Grid item lg={6}>
        <Box style={styles.agent}>CHOOSING YOUR AGENT</Box>
        <Box style={styles.chooseAgent}>How to choose your agent</Box>
        <Box style={styles.intro}>
          You should choose an agent you are comfortable working with and who
          you feel has your best interests at heart. In order to make a
          decision, try asking prospective agents the following:
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
            Ask to see examples of their success in selling properties like
            yours
          </Box>
        </Box>
        <Box display="flex" alignItems="baseline" mt={2}>
          <img src="./bullot.png" />
          <Box style={styles.bullots}>
            How often you can expect feedback from the agent while your property
            is on the marke
          </Box>
        </Box>
        <Button style={styles.findButton}>
          <SearchIcon style={{ color: "white" }} />
          <Box style={styles.buttonText}>Find an agent</Box>
        </Button>
      </Grid>
    </Grid>
  );
};
