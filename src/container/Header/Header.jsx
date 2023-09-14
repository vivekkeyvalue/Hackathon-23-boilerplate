import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import images from "../../constants/images";
import { expertiseTechImages } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeinput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <h5 className="head-text">Type Anything </h5>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      ></motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
