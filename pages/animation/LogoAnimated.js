import { motion } from 'framer-motion';

const logoVariants = (delay) => ({
  hidden: {
    scale: 0.5,
    opacity: 0,
    filter: 'blur(5px)',
    transition: {
      duration: 1.2,
      delay: delay,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      delay: delay,
    },
  },
});

export default function Logo() {
  return (
    <motion.svg
      className="h-16 w-16"
      viewBox="0 0 508 286"
      style={{ enableBackground: 'new 0 0 508 286' }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <motion.polygon
            className="fill-current bg-black"
            initial="hidden"
            animate="visible"
            variants={logoVariants(0)}
            points="504,1.86 428.51,132.19 353.88,1.86"
          />
          <motion.polygon
            className="fill-current bg-black"
            initial="hidden"
            animate="visible"
            variants={logoVariants(0.4)}
            points="340.74,283.65 389.49,199.54 276.28,1.86 179.33,1.86 223.1,78.21 223.08,78.26 271.38,162.61 
            271.4,162.58"
          />
          <motion.polygon
            className="fill-current bg-black"
            initial="hidden"
            animate="visible"
            variants={logoVariants(0.8)}
            points="166.25,283.65 214.99,199.54 101.78,1.86 4.83,1.86 48.6,78.21 48.58,78.26 96.88,162.61 
            96.9,162.58"
          />
        </g>
      </g>
    </motion.svg>
  );
}