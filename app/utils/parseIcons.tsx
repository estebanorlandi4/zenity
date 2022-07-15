import Image from 'next/image';
import { Icons } from 'utils/interfaces/github';

interface Params {
  icons: Icons | null;
  str: string;
  size: string;
}

const parseIcons = ({ icons, str, size }: Params) => {
  const codes = str.match(/\:\w+\:/g);
  if (!icons || !codes) return str;

  const words = str.split(/\s/g);
  return words.map((word) => {
    if (!/\:\w+\:/.test(word)) return `${word} `;

    const iconName = word.replaceAll(/\:/gi, '');
    const icon = icons[iconName];

    if (!icon) return ' ';
    return (
      <span key={word} className="icon-container">
        <Image width={size} height={size} alt={iconName} src={icon} />
      </span>
    );
  });
};

export default parseIcons;
