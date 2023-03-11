import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { yellow } from "@mui/material/colors";
function Box1() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  return (
    <>
      <Box
        component={motion.div}
        sx={{ height: 200, width: 200, background: "yellow" }}
        animate={{
          x: isAnimating ? 800 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{ opacity: 0.2, x: 0 }}
        transition={{
          //duation doesnt work in type of spring
          type: "spring",
          stiffness: 10,
          // dumping: 100,
          // delay: 2,
          // duration: 4,
        }}
        // whileHover={{
        //   scale: 1.2,
        //   transition: { duration: 0.5 },
        // }}
        // whileTap={{
        //   backgroundColor: "green",
        // }}
        whileHover='hover'
        whileTap='tap'
        onClick={() => setIsAnimating(!isAnimating)}
      >
        hello
      </Box>
    </>
  );
}

export default Box1;
