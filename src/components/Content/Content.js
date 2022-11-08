import React, { useEffect } from "react";
import "../Content/Content.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [animation, inView]);
  return (
    <div className="section" ref={ref}>
      <div className="container">
        <div className={`"row_wrap" ${!inverse ? "img_backgroung" : ""}`}>
          <div className={`colume_wrap  ${reverse ? "clmwrapreverse" : ""}`}>
            <div className="text_wrap">
              <motion.div
                className="topline"
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </motion.div>
              <motion.div
                className="heading_text"
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                {headline}
              </motion.div>
              <motion.div
                className="subtitle"
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                {description}
              </motion.div>
              <motion.button
                className="content_btn"
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
              >
                {buttonLabel}
              </motion.button>
            </div>
            <div>
              <motion.img
                className="img_wrap"
                src={img.src}
                height={img.height}
                width={img.width}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
