import { Box } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import React from "react";
function Box4() {
  const control = useAnimation();
  return (
    <div style={{ margin: "40px 0" }}>
      <button
        onClick={() => {
          control.start({
            x: 1500,
            transition: { duration: 2 },
          });
        }}
      >
        Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: { duration: 2 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Rectangle
      </button>
      <button
        onClick={() => {
          control.stop({
            transition: { duration: 0.5 },
          });
        }}
      >
        Stop
      </button>

      <Box
        component={motion.div}
        style={{ height: 200, width: 200, background: "green" }}
        animate={control}
        drag
      >
        hello
      </Box>
    </div>
  );
}

export default Box4;
