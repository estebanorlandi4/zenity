function getContrastColor(hexcolor: string): string {
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map((hex) => hex + hex)
      .join('');
  }

  const [r, g, b] = [
    parseInt(hexcolor.substring(0, 2), 16),
    parseInt(hexcolor.substring(2, 4), 16),
    parseInt(hexcolor.substring(4, 6), 16),
  ];

  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

export default getContrastColor;
