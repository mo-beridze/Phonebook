import { Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Box } from '@mui/system';
import Image from '../Form/Images/3.jpg';
import s from './AppBar.module.css';

export default function HomePage() {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };

  return (
    <motion.div initial="hidden" whileInView="visible">
      <Box
        sx={{
          height: '100vh',
          backgroundImage: `url(${Image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: 0,
        }}
      >
        <Grid align="center" sx={{ marginLeft: 20, marginRight: 20 }}>
          <motion.h1 custom={1} variants={textAnimation} className={s.caption}>
            Welcome to My{' '}
            <motion.span
              custom={2}
              variants={textAnimation}
              className={s.colorTitle}
            >
              Project
            </motion.span>
          </motion.h1>
        </Grid>
      </Box>
    </motion.div>
  );
}
