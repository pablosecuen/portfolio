import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery";

function Proyects() {
  const isXSmallMobile = useMediaQuery("(max-width: 370px)");
  const isSmallMobile = useMediaQuery(
    "(min-width: 371px) and (max-width: 639px)"
  );
  const isMobile = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1279px)"
  );
  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="relative h-96 w-full">
      {isLargeDesktop && (
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%" },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" w-full text-center text-6xl tracking-tighter  text-white"
          >
            My proyects
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%", y: 100 },
              visible: { opacity: 1, scale: 1, x: 200, y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            1
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "220%", y: 150 },
              visible: { opacity: 1, scale: 1, x: "180%", y: 150 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            2
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%", y: 150 },
              visible: { opacity: 1, scale: 1, x: 200, y: 150 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            3
          </motion.div>
        </div>
      )}

      {isXSmallMobile && (
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 0 },
              visible: { opacity: 1, scale: 1, y: -100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" w-full text-center text-xl tracking-tighter  text-white"
          >
            My proyects
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, y: 100 },
              visible: { opacity: 1, scale: 1, y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-full min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            1
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, y: 100 },
              visible: { opacity: 1, scale: 1, y: 200 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-full min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            2
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, y: 100 },
              visible: { opacity: 1, scale: 1, y: 300 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-full min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            3
          </motion.div>
        </div>
      )}

      {isSmallMobile && (
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: -100, y: 0 },
              visible: { opacity: 1, scale: 1, x: 0, y: -100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" w-full text-center text-xl tracking-tighter  text-white"
          >
            My proyects
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, x: -100, y: 100 },
              visible: { opacity: 1, scale: 1, x: "90%", y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex h-[250px] w-1/3 min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200 "
          >
            1
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, y: 100 },
              visible: { opacity: 1, scale: 1, y: 200 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-1/3 min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            2
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, x: -100, y: 100 },
              visible: { opacity: 1, scale: 1, x: "90%", y: 300 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-1/3 min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            3
          </motion.div>
        </div>
      )}

      {isMobile && (
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 0 },
              visible: { opacity: 1, scale: 1, y: -100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" w-full text-center text-2xl tracking-tighter  text-white"
          >
            My proyects
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, x: -100, y: 100 },
              visible: { opacity: 1, scale: 1, x: 400, y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-1/3 min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            1
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, x: 400, y: 100 },
              visible: { opacity: 1, scale: 1, x: 0, y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-1/3 min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            2
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, x: -100, y: 100 },
              visible: { opacity: 1, scale: 1, x: 400, y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" flex h-[250px] w-1/3 min-w-[300px] justify-center rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            3
          </motion.div>
        </div>
      )}

      {isTablet && (
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%" },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" w-full text-center text-4xl tracking-tighter  text-white"
          >
            My proyects
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%", y: 100 },
              visible: { opacity: 1, scale: 1, x: "200%", y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            1
          </motion.div>{" "}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "220%", y: 150 },
              visible: { opacity: 1, scale: 1, x: "0%", y: 150 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            2
          </motion.div>{" "}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%", y: 150 },
              visible: { opacity: 1, scale: 1, x: "200%", y: 200 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            3
          </motion.div>
        </div>
      )}

      {isDesktop && (
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%" },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" w-full text-center text-4xl tracking-tighter  text-white"
          >
            My proyects
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%", y: 100 },
              visible: { opacity: 1, scale: 1, x: "170%", y: 100 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[400px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            1
          </motion.div>{" "}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "200%", y: 150 },
              visible: { opacity: 1, scale: 1, x: "0%", y: 150 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[400px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            2
          </motion.div>{" "}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: "-40%", y: 150 },
              visible: { opacity: 1, scale: 1, x: "170%", y: 200 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" h-[300px] w-1/3 min-w-[400px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          >
            3
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Proyects;
