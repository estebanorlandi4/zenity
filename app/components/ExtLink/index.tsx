import { motion, MotionProps } from 'framer-motion';

interface Props extends MotionProps {
  children: JSX.Element | JSX.Element[];
  href: string;
}

function ExtLink({ children, ...props }: Props) {
  return (
    <motion.a {...props} target="_blank" rel="noreferrer">
      {children}
    </motion.a>
  );
}

export default ExtLink;
