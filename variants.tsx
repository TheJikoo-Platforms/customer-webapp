export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const slideFromRight = {
  initial: {
    opacity: 0,
    x: "400px",
  },

  animate: {
    opacity: 1,
    x: "0",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export const slideUp = {
  initial: {
    opacity: 0,
    y: "0",
  },

  animate: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring",
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};
