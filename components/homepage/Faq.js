import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { Fade } from "react-reveal";

import { faqData } from "../../assets/data";

const Faq = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <section id="faq" className="px-8 md:px-24 py-12 md:py-16">
      <Fade bottom>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-5 text-main">
          You Have <span className="text-dark">Questions?</span>
        </h1>
        <p className="text-gray-500 text-center mb-8 md:mb-20 md:text-lg">
          Yang sering ditanyakan teman-teman kami.
        </p>

        {faqData.map((faq, index) => (
          <div
            onClick={() => toggleQuestion(index)}
            key={faq.id}
            className="md:px-36 pb-4 cursor-pointer select-none"
          >
            <div className={`bg-light p-6`}>
              <div className="flex justify-between ">
                <p className="font-semibold md:text-lg text-gray-600">
                  {faq.question}
                </p>
                <motion.div
                  variants={{
                    collapsed: { rotate: 0 },
                    open: { rotate: -180 },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <HiChevronDown size={30} className="text-dark" />
                </motion.div>
              </div>
              <motion.p
                className={`text-gray-500`}
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "14px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                }}
                initial="collapsed"
                animate={activeQuestionIndex === index ? "open" : "collapsed"}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {faq.answer}
              </motion.p>
            </div>
          </div>
        ))}
      </Fade>
    </section>
  );
};

export default Faq;
