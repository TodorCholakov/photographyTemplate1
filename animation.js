export const pageAnimation = {
    hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          duration: 0.4,
          when: "beforeChildren",
          staggerChildren: 0.25,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      },
    };