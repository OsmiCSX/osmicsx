export default (hex: string): string => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    throw new Error("Custom Colors: Bad Hex");
  }

  let color = hex.substring(1);
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const num = parseInt(color, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${
    num & 255
  }, var(--osmi-opacity))`;
};
