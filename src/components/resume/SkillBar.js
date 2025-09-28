import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ title, percentage, width }) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{title}</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`${width} h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
        >
          <span className="absolute -top-7 right-0">
            <p className="text-xs font-semibold inline-flex px-2 py-1 bg-black bg-opacity-60 rounded-md">
              {percentage}
            </p>
          </span>
        </motion.span>
      </span>
    </div>
  );
};

export default SkillBar;
