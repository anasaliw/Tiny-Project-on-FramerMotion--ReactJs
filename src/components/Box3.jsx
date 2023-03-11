import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
function Box3() {
  return (
    <div style={{ margin: "40px 0" }}>
      <Box
        component={motion.div}
        style={{ height: 200, width: 200, background: "green" }}
        animate={{
          scale: [1, 1.4, 1.4, 0.8, 1],
          borderRadius: ["20%", "100%", "100%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
      >
        hello
      </Box>
    </div>
  );
}

export default Box3;
