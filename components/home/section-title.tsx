'use client'

import { motion } from "framer-motion";

export const SectionTitle = ({
  heading,
  num,
  className,
}: {
  heading: string;
  num: string;
  className?: string;
}) => {
  return (
    <>
      <motion.div
        className={
          className +
          " flex gap-2 md:gap-4 lg:mb-6 mb-4 capitalize items-center text-[10px]"
        }
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, delay: 0.25 }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          className="tracking-[3px]"
        >
          {num}
        </motion.div>
        <motion.div
          variants={{
            hidden: { width: 20 },
            visible: { width: 40 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          className="h-0.5 w-10 bg-primary"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, delay: 0.65 }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          className="[&>span+span]:ml-[1px] md:[&>span+span]:ml-[3px]"
        >
          {heading
            ?.toUpperCase()
            .split("")
            .map((el) => (
              <span key={el + Math.random()}>{el}</span>
            ))}
        </motion.div>
      </motion.div>
    </>
  );
};
