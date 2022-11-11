import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import Image from "../Form/Images/3.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };

  return (
    <motion.div initial="hidden" whileInView="visible">
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: 0,
        }}
      >
        <Grid align="center" sx={{ marginLeft: 20, marginRight: 20 }}>
          <Typography
            variant="h5"
            color="white"
            custom={1}
            variants={textAnimation}
            component={motion.h1}
            sx={{ paddingTop: 30 }}
          >
            Welcome to My
          </Typography>
          <Typography
            color="white"
            variant="h5"
            custom={2}
            variants={textAnimation}
            component={motion.h1}
          >
            Project
          </Typography>
          <Box display="flex">
            <Button
              size="large"
              component={Link}
              to={"/register"}
              sx={{
                marginTop: 5,
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#427AA1",
                color: "#EBF2FA",
                "&:hover": {
                  backgroundColor: "#EBF2FA",
                  color: "black",
                },
              }}
              variant="contained"
            >
              Register
            </Button>
          </Box>
        </Grid>
      </Box>
    </motion.div>
  );
}
