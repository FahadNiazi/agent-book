import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { styles } from "./styles.js";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export const TopAgents = ({
  title,
  description,
  image,
  name,
  intro,
  rating,
}) => {
  return (
    <Box>
      <Box>
        <Box style={styles.title}>{title}</Box>
        <Box style={styles.description}>{description}</Box>
        <Box display="flex" mt={4}>
          <Avatar sx={{ width: 112, height: 112 }}>
            <Image src={image} alt={"alt"} layout="fill" />
          </Avatar>
          <Box ml={2}>
            <Box>
              <Box style={styles.flex}>
                <Box style={styles.name}>{name}</Box>

                <Box>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                    display="flex"
                    alignItems="center"
                    color="#73757E"
                    fontSize={14}
                    fontWeight={600}
                    fontFamily={"OpenSans"}
                  >
                    <Rating value={rating} readOnly />
                    <Typography>{rating}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box style={styles.intro}>{intro}</Box>
            <Box style={styles.flexEnd}>
              <Button style={styles.buttonNamme}>Contact Agent</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
