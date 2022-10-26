import React from "react";
import { Box, Button, Hidden, InputBase } from "@mui/material";
import { styles } from "./styles.js";
import { Search } from "@mui/icons-material";
export const LocalAgent = () => {
  return (
    <Hidden mdDown>
      <Box style={styles.backgroundColor}>
        <Box>
          <Box style={styles.heading}>Connect with an expert local agent </Box>
          <Box style={styles.description}>
            Our agents are here to help you. Let’s make your home search or sale
            easier.
          </Box>
        </Box>
        <Box
          borderRadius="5px"
          border="1px solid white"
          display="flex"
          minHeight="56px"
          bgcolor="white"
          width="100%"
          maxWidth="528px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box py={2} pl={3} sx={{ flex: 1 }} width="100%">
            <InputBase placeholder="Search by name or location" />
          </Box>
          <Button variant="contained" sx={{ height: "64px !important" }}>
            <Search />
          </Button>
        </Box>
      </Box>
    </Hidden>
  );
};
