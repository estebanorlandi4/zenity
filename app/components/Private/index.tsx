import { useSession } from 'next-auth/react';

type Component = JSX.Element | string | (JSX.Element | string)[];
interface Props {
  children?: Component;
}
function Private({ children }: Props) {
  const { data: session } = useSession();

  if (!session || !children) return null;
  return <>{children}</>;
}

export default Private;
