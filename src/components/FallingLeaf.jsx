import React, { useState } from "react";
import { motion } from "framer-motion";

const colors = ["#4CAF50", "#FFC107", "#FF5722", "#F44336", "#795548"]; // all-season colors

const FallingLeaf = ({ delay = 0, size = 1.5, left = "0%" }) => {
  const [visible, setVisible] = useState(true); // track if leaf is visible
  const color = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = () => {
    setVisible(false);
    setTimeout(() => setVisible(true), 2000); // reappear after 2s
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: -10, rotate: 0, opacity: 0.1 }} // very dim
      animate={{ y: "120vh", rotate: 360, opacity: [0.1, 0.2, 0.1] }}
      transition={{
        delay: delay,
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear",
      }}
      onClick={handleClick}
      style={{
        position: "fixed",
        top: 0,
        left: left,
        fontSize: `${size}rem`,
        color: color,
        zIndex: 0,
        pointerEvents: "auto", // allow clicking
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      🍃
    </motion.div>
  );
};

export default FallingLeaf;
