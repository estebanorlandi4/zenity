import { motion, MotionProps } from 'framer-motion';

type Children = JSX.Element | string | (string | JSX.Element)[];

interface Props extends MotionProps {
  children: Children;
  href: string;
  className?: string;
}

function ExtLink({ children, ...props }: Props) {
  return (
    <motion.a {...props} target="_blank" rel="noreferrer">
      {children}
    </motion.a>
  );
}

export default ExtLink;
