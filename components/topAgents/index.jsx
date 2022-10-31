import { Avatar, Box, Button, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { styles } from "./styles.js";
import Rating from "@mui/material/Rating";
export const TopAgents = ({
  title,
  description,
  image,
  name,
  intro,
  rating,
}) => {
  const [more, setMore] = useState(false);
  const introInitial = intro.substring(0, intro.length / 2);
  const introRest = intro.substring(intro.length / 2);
  return (
    <Box>
      <Box>
        <Box style={styles.title}>{title}</Box>
        <Box style={styles.description}>{description}</Box>
        <Box display="flex" mt={6.1}>
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
            <Box style={styles.intro}>
              {introInitial}
              {more ? (
                introRest
              ) : (
                <ButtonBase onClick={() => setMore(true)} style={styles.more}>
                  {" "}
                  ... <span style={styles.moreText}>More</span>{" "}
                </ButtonBase>
              )}
            </Box>
            <Box style={styles.flexEnd}>
              <Button style={styles.buttonName}>Contact Agent</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
