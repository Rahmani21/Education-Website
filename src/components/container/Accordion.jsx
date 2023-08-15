import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold ">{title}</div>
        <BsChevronDown className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300 `} onClick={() => handleClick(id)} />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{duration:0.3}}
            style={{overflow:"hidden"}}
            className="pt-4"
          >
            <p className=" text-sm text-gray leading-7">
              Center For Learning allows for students to self-pace through
              material, and scales material based on student progress, something
              that is impossible in a traditional classroom. Students can be
              linked to “coaches” who can be their classroom teacher, a parent,
              a tutor, or a peer-tutor.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
