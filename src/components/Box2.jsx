import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
function Box2() {
  return (
    <div style={{ margin: "40px 0" }}>
      <Box
        component={motion.div}
        style={{ height: 200, width: 200, background: "green" }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.5 },
        }}
        drag
        dragConstraints={{
          left: -10,
          right: 400,
        }}
      >
        hello
      </Box>
    </div>
  );
}

export default Box2;
