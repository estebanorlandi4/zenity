import styled, { css } from 'styled-components';

interface Params {
  size: [string, string];
  radius?: string;
}
export const Placeholder = styled.div<Params>`
  ${({ size, radius }) =>
    css`
      width: ${size && size[0]};
      height: ${size && size[1]};
      border-radius: ${radius || '9999px'};
    `}

  background: linear-gradient(-45deg, #fff0, #fff1, #fff2, #fff1, #fff0), linear-gradient(#35353e, #35353e);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
