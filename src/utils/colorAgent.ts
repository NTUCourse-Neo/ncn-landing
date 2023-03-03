import ColorHash from "color-hash";
import RandomColor from "randomcolor";

const hashToColorHex = (str: string, lightness: number, saturation = 0.5) => {
  const colorhash = new ColorHash({
    lightness: lightness,
    saturation: saturation,
  });
  return colorhash.hex(str);
};

const hashToColorHexWithHue = (
  str: string,
  hue: {
    min: number;
    max: number;
  }
) => {
  const colorhash = new ColorHash({ hue: hue });
  return colorhash.hex(str);
};

const randomColorHex = () => {
  return RandomColor();
};

export { hashToColorHex, hashToColorHexWithHue, randomColorHex };
