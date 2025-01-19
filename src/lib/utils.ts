export const faNumber = (enNumber: string | number): string => {
  const farsiDigits: string[] = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];

  const str = String(enNumber);
  return str.replace(/\d/g, (digit) => farsiDigits[parseInt(digit, 10)]);
};
