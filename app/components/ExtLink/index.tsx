import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLAnchorElement> {
  children: JSX.Element;
}

function ExtLink({ children, ...props }: Props) {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default ExtLink;
