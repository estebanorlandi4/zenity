import { useState } from 'react';

interface Props {
  init?: boolean;
}

function useShow({ init }: Props) {
  const [state, setState] = useState(init);
  const toggle = () => setState((old) => !old);

  return {
    state,
    toggle,
  };
}

export default useShow;
