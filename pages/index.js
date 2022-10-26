import { Box, Grid, Pagination, Stack } from "@mui/material";
import tim from "../assests/tim.png";
import joan from "../assests/joan.png";
import lyda from "../assests/lyda.png";
import dave from "../assests/dave.png";
import { TopAgents } from "../components/topAgents";
import { styles } from "./styles.js";
import { ChooseAgent } from "../components/chooseAgent";
import { LocalAgent } from "../components/localAgent";
import { TimeConverstation } from "../components/timeConverstation";
import { LatestArticles } from "../components/latestArticles";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Home() {
  return (
    <Box>
      <Header />
      <Grid container p={5}>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} lg={10} md={6}>
          <Box>
            <Box style={styles.title}>Toronto’s Top Rated Agents </Box>
            <Box style={styles.description}>
              Clients loved working with these agents
            </Box>
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              <TopAgents
                image={tim}
                name="Tim Hortons"
                intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                rating={3.7}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TopAgents
                image={lyda}
                name="Lydia Hollie"
                intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                rating={2}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TopAgents
                image={dave}
                name="Dave Lordsky"
                intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                rating={2.9}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TopAgents
                image={tim}
                name="Tim Hortons"
                intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                rating={5}
              />
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
          </Grid>
          <ChooseAgent />
          <Box>
            <Box style={styles.heading}>Toronto’s Most Active Agents </Box>
            <Grid container spacing={5}>
              <Grid item lg={6}>
                <TopAgents
                  image={tim}
                  name="Tim Hortons"
                  intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                  rating={3}
                />
              </Grid>
              <Grid item lg={6}>
                <TopAgents
                  image={joan}
                  name="Joan Wrigley"
                  intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                  rating={3}
                />
              </Grid>
              <Grid item lg={6}>
                <TopAgents
                  image={lyda}
                  name="Lydia Hollie"
                  intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                  rating={3}
                />
              </Grid>
              <Grid item lg={6}>
                <TopAgents
                  image={dave}
                  name="Dave Lordsky"
                  intro=" Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...More"
                  rating={3}
                />
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
            </Grid>
          </Box>
        </Grid>

        <Grid item lg={1}></Grid>
      </Grid>
      <Box bgcolor={"#12182D"} mt={5}>
        <Grid container justifyContent="center">
          <Grid item lg={10}>
            <LocalAgent />
          </Grid>
        </Grid>
      </Box>
      <Grid container p={5}>
        <Grid item lg={1}></Grid>
        <Grid item lg={10} md={6} sm={4} xs={12}>
          <TimeConverstation />
          <LatestArticles />
        </Grid>

        <Grid item lg={1}></Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
