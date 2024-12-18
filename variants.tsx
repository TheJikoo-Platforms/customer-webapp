export const fadeIn = (direction: string, delay: number = 0) => {
  return {
    initial: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
        delay: delay,
      },
    },
    exit: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
  };
};

export const slideFromRight = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

export const slideUp = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      duration: 0.3,
    },
  },
};

export const slideDown = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      duration: 0.3,
    },
  },
};

export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200,
    },
  },
};

export const slideFromLeft = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

export const popUp = {
  initial: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
};
