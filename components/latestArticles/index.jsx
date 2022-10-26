import { Avatar, Box, Grid, Pagination, Stack } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styles } from "./styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
export const LatestArticles = () => {
  return (
    <Box>
      <Box style={styles.heading} mb={7}>
        {" "}
        Latest Articles by Agents
      </Box>

      <Grid container spacing={5}>
        <Grid item lg={4}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <CalendarMonthIcon style={{ color: "#62616F" }} />
              <Box style={styles.dateTime}>MARCH 21, 2022</Box>
            </Box>

            <Box display="flex" alignItems="center">
              <MenuBookIcon style={{ color: "#62616F" }} />
              <Box style={styles.dateTime}>5 Min Read</Box>
            </Box>
          </Box>
          <Box>
            <img style={styles.mt} src="./newHome.png" width="100%" />
          </Box>
          <Box style={styles.homeDetail}>
            How to get multiple offers on your home
          </Box>
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Box display="flex" alignItems="center">
              <Avatar alt="Remy Sharp" src="/jone.png" />
              <Box style={styles.name}>Joan Hollie </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <LocalOfferIcon style={{ color: "#73757E" }} />
              <Box style={styles.name}>BUYING</Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <CalendarMonthIcon style={{ color: "#62616F" }} />
              <Box style={styles.dateTime}>MARCH 21, 2022</Box>
            </Box>

            <Box display="flex" alignItems="center">
              <MenuBookIcon style={{ color: "#62616F" }} />
              <Box style={styles.dateTime}>5 Min Read</Box>
            </Box>
          </Box>
          <Box style={styles.mt}>
            <img src="./offerHome.png" width="100%" />
            <Box style={styles.homeDetail}>
              10 home buying tips for first-time home buyers
            </Box>
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Box display="flex" alignItems="center">
                <Avatar alt="Remy Sharp" src="/jone.png" />
                <Box style={styles.name}>Joan Hollie </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <LocalOfferIcon style={{ color: "#73757E" }} />
                <Box style={styles.name}>BUYING</Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <CalendarMonthIcon style={{ color: "#62616F" }} />
              <Box style={styles.dateTime}>MARCH 21, 2022</Box>
            </Box>
            <Box display="flex" alignItems="center">
              <MenuBookIcon style={{ color: "#62616F" }} />
              <Box style={styles.dateTime}>5 Min Read</Box>
            </Box>
          </Box>
          <Box style={styles.mt}>
            <img src="./decorHome.png" width="100%" />
            <Box style={styles.homeDetail}>
              15 simple and relaxing decor ideas to transform your home{" "}
            </Box>
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Box display="flex" alignItems="center">
                <Avatar alt="Remy Sharp" src="/jone.png" />
                <Box style={styles.name}>Joan Hollie </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <LocalOfferIcon style={{ color: "#73757E" }} />
                <Box style={styles.name}>BUYING</Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box mt={10} display="flex" justifyContent="center" width="100%">
        <Stack spacing={2}>
          <Pagination
            count={10}
            shape="rounded"
            variant="outlined"
            color="primary"
          />
        </Stack>
      </Box>
    </Box>
  );
};
