import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Cake from "../images/cake.png";
const HeroSection = () => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Typography variant="h3" color="inherit">
          A bliss in every byte
        </Typography>
        <Typography variant="h5" color="inherit">
          We offer tasty cakes and sweet for you
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 5,
            marginTop: 4,
          }}
        >
          Call Us
        </Button>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        justifyContent="center"
        order={{ xs: 1, sm: 2 }}
      >
        <Box
          component="img"
          src={Cake}
          sx={{
            height: 300,
            width: 300,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
