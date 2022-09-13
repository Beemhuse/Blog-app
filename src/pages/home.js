import React from "react";
import { Grid, Avatar, Typography, Box, Stack } from "@mui/material";
import image from "../images/Rectangle4.png";

export default function Homepage() {
  return (
    <>
      <Grid container spacing={3} p={3} sx={{minHeight:'100vh'}} >
        <Grid item md={12} px={2}>
          <Grid container spacing ={2} sx={{ display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <img src={image} alt="hhd" width={600} />
              <Box component='div' sx={{width:500}}>
                  <Stack spacing={2}>
                    
                <Typography variant="p" sx={{ opacity: "0.6", color:'white' }}>
                  UI Design
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    opacity: "0.6",
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </Typography>
              <Avatar sx={{ width: 60, height: 60 }} />
                  </Stack>
              </Box>
        </Grid>
        <Grid item md={12} mt={4}>
            <Typography sx={{color:'white'}}>Latest News</Typography>
          <Grid container>
            <Grid item md={4}>
            <img src={image} alt="hhd" width={200} />
              <Box component='div' sx={{}}>
                  <Stack spacing={2}>
                    
                <Typography variant="p" sx={{ opacity: "0.6", color:'white' }}>
                  UI Design
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    opacity: "0.6",
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </Typography>
              <Avatar sx={{ width: 60, height: 60 }} />
                  </Stack>
              </Box>
            </Grid>
            <Grid item md={4}>
            <img src={image} alt="hhd" width={200} />
              <Box component='div' sx={{}}>
                    
                  <Stack spacing={2}>
                <Typography variant="p" sx={{ opacity: "0.6", color:'white' }}>
                  UI Design
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    opacity: "0.6",
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </Typography>
              <Avatar sx={{ width: 60, height: 60 }} />
                  </Stack>
              </Box>
            </Grid>
            <Grid item md={4}>
            <img src={image} alt="hhd" width={200} />
              <Box component='div' sx={{}}>
                  <Stack spacing={2}>
                    
                <Typography variant="p" sx={{ opacity: "0.6", color:'white' }}>
                  UI Design
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    opacity: "0.6",
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </Typography>
              <Avatar sx={{ width: 60, height: 60 }} />
                  </Stack>
              </Box>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    {/* </Container> */}

    </>
  );
}