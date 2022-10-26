import { Flag, Menu, Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputBase,
  useMediaQuery,
  Hidden,
} from "@mui/material";

export const Header = () => {
  const ismobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      position="relative"
      mb={2.2}
      height={ismobile ? 800 : "unset"}
      bgcolor={ismobile ? "black" : "white"}
    >
      <Hidden mdDown>
        <img src="./header.png" width="100%" />
      </Hidden>
      <Box position="absolute" top={0} bottom={0} left={0} right={0} pt={2.5}>
        <Grid container justifyContent="center">
          <Grid item lg={11}>
            <Box
              display="flex"
              justifyContent="space-between"
              mb={10}
              padding={ismobile ? 2 : "unset"}
              alignItems="center"
            >
              <Box>
                <img src="./logo.png" />
              </Box>
              <Box display="flex">
                <Button style={{ border: "1px solid white" }}>
                  <img src="./flag.png" width="21px" height="14px" />
                </Button>
                <Box display="flex" marginLeft="30px">
                  <Button style={{ border: "1px solid white", gap: 26 }}>
                    <Menu style={{ width: 30, height: 30, color: "white" }} />
                    <Avatar style={{ marginLeft: 5 }} src="/jone.png" />
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              height="100%"
              justifyContent="center"
              padding={ismobile ? 2 : "unset"}
            >
              <Box
                fontFamily="Lato"
                color="white"
                fontWeight={800}
                fontSize={55}
                lineHeight={"50px"}
                mb={2}
                textAlign="center"
              >
                Find The Perfect Real Estate Agent
              </Box>
              <Box
                fontFamily="poppins"
                color="white"
                fontWeight={400}
                fontSize={20}
                lineHeight={"30px"}
                mb={4.3}
                textAlign="center"
                maxWidth={779}
              >
                Make your search and sale easier and faster by connecting with
                one of our expert local agent in your neighborhood
              </Box>
              <Box
                borderRadius={"5px"}
                p={"13px"}
                bgcolor="white"
                display="flex"
                alignItems="center"
                minHeight="86px"
                width="75%"
              >
                <Search style={{ color: "#9895AB", marginLeft: 17 }} />
                <InputBase sx={{ flex: 1, marginLeft: 4 }} />
                <Box>
                  <Button
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "poppins",
                      fontSize: 16,
                      minHeight: 60,
                      textTransform: "capitalize",
                    }}
                    variant="contained"
                  >
                    Search Agents
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
