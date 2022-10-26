import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Grid, Box, IconButton, Divider } from "@mui/material";
import React from "react";
export const Footer = () => {
  return (
    <Box bgcolor="#000518" py={6} mt={6}>
      <Grid container justifyContent="center">
        <Grid item lg={10}>
          <Grid container justifyContent="space-between" spacing={5}>
            <Grid item lg={3}>
              <Box mb={3}>
                <img alt="logo" src="./logo.png" />
              </Box>
              <Box
                fontFamily="Poppins"
                mb={3}
                fontWeight={400}
                fontSize={14}
                color="#D9DBE1"
              >
                Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
                nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
                placerat.
              </Box>
              <Box display="flex">
                <IconButton>
                  <Instagram style={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <Facebook style={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <Twitter style={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <YouTube style={{ color: "white" }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Box
                fontFamily="Lato"
                fontWeight={600}
                fontSize={20}
                lineHeight="30px"
                color="#FFFFFF"
                mb={3}
              >
                Company
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                About
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                Blog
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                Contact
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
                display="flex"
                alignItems="center"
              >
                <span style={{ marginRight: 8 }}>Careers</span>{" "}
                <img src="./hiring.png" />
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Box
                fontFamily="Lato"
                fontWeight={600}
                fontSize={20}
                lineHeight="30px"
                color="#FFFFFF"
                mb={3}
              >
                Company
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                About
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                Blog
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                Contact
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
                display="flex"
                alignItems="center"
              >
                <span style={{ marginRight: 8 }}>Careers</span>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Box
                fontFamily="Lato"
                fontWeight={600}
                fontSize={20}
                lineHeight="30px"
                color="#FFFFFF"
                mb={3}
              >
                Company
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                About
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                Blog
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
              >
                Contact
              </Box>
              <Box
                fontFamily="poppins"
                fontWeight={400}
                fontSize={14}
                lineHeight="24px"
                color="#D9DBE1"
                mb={1.2}
                display="flex"
                alignItems="center"
              >
                <span style={{ marginRight: 8 }}>Careers</span>
              </Box>
            </Grid>
          </Grid>
          <Box
            mt={5}
            pt={5}
            borderTop="1px solid rgba(255, 255, 255, 0.32)"
            display="flex"
            justifyContent="space-between"
            color="rgba(255, 255, 255, 0.6);"
          >
            <Box>2022 Agentbook All Rights Reserved</Box>
            <Box
              display="flex"
              fontFamily="Poppins"
              justifyContent="space-between"
              fontWeight={400}
              fontSize={14}
              lineHeight="24px"
              width={"30%"}
            >
              <Box>Terms & Conditions</Box>
              <Box>Privacy Policy</Box>
              <Box>Cookie Policy</Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
