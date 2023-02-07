export const convertToRem = (pxValues: string) => {
  const remValues = pxValues?.split(",").map(elem => parseFloat(elem) / 16).filter(Boolean);

  return remValues;
}