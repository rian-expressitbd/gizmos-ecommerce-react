// validationRules.ts
export const validateBusinessName = (value: string): string => {
  if (!value) return "Business name is required.";
  if (!/^[A-Za-z0-9\s\-.,]+$/.test(value))
    return "Invalid business name. Use only letters, numbers, spaces, hyphens, and periods.";
  return "";
};

export const validateEmail = (value: string): string => {
  if (!value) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return "Invalid email address.";
  return "";
};

export const validatePhone = (value: string): string => {
  if (!value) return "Phone number is required.";
  if (!/^\d{11}$/.test(value))
    return "Invalid phone number (11 digits required).";
  return "";
};

export const validateDeliveryCost = (value: string): string => {
  if (!value) return "Delivery cost is required.";
  if (isNaN(Number(value))) return "Delivery cost must be a number.";
  if (Number(value) < 0) return "Delivery cost cannot be negative.";
  return "";
};

export const validateLocation = (value: string): string => {
  if (!value) return "Location is required.";
  return "";
};
