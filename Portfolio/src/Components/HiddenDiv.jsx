import React from "react";
import { motion } from "framer-motion";

const HiddenDiv = () => {
  return (
    <motion.div
      className="fixed bottom-0 right-0 bg-gray-900 p-4 text-white"
      initial={{ y: 0 }}
      animate={{ y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <p>This div will be hidden when scrolling up!</p>
    </motion.div>
  );
};

export default HiddenDiv;
