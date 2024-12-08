import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  // Split text into characters, including spaces
  const letters = text.split("");

  // Variants for typing animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        display: "inline-block", // Ensure the animation happens inline
      }}
    >
      {letters.map((letter, index) => (
        <Typography
          key={index}
          component={motion.span}
          variants={letterVariants}
          sx={{
            display: "inline-block",
            fontSize: "30px", // Adjust the size
            color: "#fff", // Color for the text
            whiteSpace: "pre-wrap", // Preserve spaces
          }}
        >
          {letter}
        </Typography>
      ))}
      <Box
        component={motion.div}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        sx={{
          display: "inline-block",
          width: "2px",
          height: "30px",
          backgroundColor: "#1976d2",
          marginLeft: "4px",
        }}
      />
    </Box>
  );
};

export default AnimatedText;
