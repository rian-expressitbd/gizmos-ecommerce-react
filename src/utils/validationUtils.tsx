const validateDeliveryCost = (value: string): string => {
  if (!value?.trim()) return "Delivery cost is required.";
  if (isNaN(Number(value)) || Number(value) < 0) return "Must be a positive number.";
  return "";
};

export const Validators: any = {
  name: (value: string): string => {
    if (!value?.trim()) return "Full name is required.";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only uppercase, lowercase and space allowed.";
    return "";
  },
  businessName: (value: string): string => {
    if (!value?.trim()) return "Business name is required.";
    if (!/^[A-Za-z0-9\s\-.,]+$/.test(value)) return "Use only letters, numbers, spaces, hyphens, and periods.";
    return "";
  },
  email: (value: string): string => {
    if (!value?.trim()) return "Email is required.";
    if (!value?.includes("@")) {
      return "Invalid email format.Example: user@example.com";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format.";
    return "";
  },
  phone: (value: string): string => {
    if (!value?.trim()) return "Phone number is required.";
    if (!/^(01)[1-9]\d{8}$/.test(value)) return "Invalid BD phone number (11 digits starting with 01).";
    return "";
  },
  password: (value: string): string => {
    if (!value) return "Password is required.";
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/.test(value))
      return "8-20 characters with at least one uppercase, lowercase, number, and special character (@, $, !, %, *, ?, &)";
    return "";
  },
  confirmPassword: (password: string, confirmPassword: string): string => {
    if (!confirmPassword) return "Confirm password is required.";
    if (password !== confirmPassword) return "Passwords don't match.";
    return "";
  },
  location: (value: string): string => {
    if (!value?.trim()) return "Address is required.";
    if (value.length < 5 || value.length > 255) return "Address must be between 5-255 characters.";
    return "";
  },
  deliveryCost: validateDeliveryCost,
  insideDhaka: validateDeliveryCost,
  outsideDhaka: validateDeliveryCost,
  subDhaka: validateDeliveryCost,
  website: (value: string): string => {
    if (value && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value))
      return "Invalid website URL.";
    return "";
  },
  socialMedia: (value: string): string => {
    if (!value?.trim()) return "Facebook url is required.";
    if (!/^(https?:\/\/)?(www\.)?(facebook|fb)\.com\/[A-Za-z0-9._%-]+\/?$/.test(value)) {
      return "Invalid social media URL.";
    }
    return "";
  },
  credential: (value: string): string => {
    if (!value?.trim()) return "Email or phone is required.";
    return "";
  },
  image: (file: File | undefined): string => {
    if (!file) return "Image is required.";
    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ["image/jpeg", "image/webp", "image/png", "image/gif", "image/jpg"];
    if (!allowedTypes.includes(file.type) || file.size > maxSize)
      return "Invalid image (max 5MB, only JPG/PNG/WEBP/GIF allowed).";
    return "";
  },
};
// =========================
// Usage Example
// =========================
/*
  import { Validators } from './validationUtils';
  
  const validateForm = (formData) => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(formData).forEach((key) => {
      const error = Validators[key]?.(formData[key], key);
      if (error) newErrors[key] = error;
    });
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  */

export const mapValidationErrors = (errorArray: { path: string; message: string }[]): Record<string, string> => {
  return errorArray.reduce((acc, err) => {
    acc[err.path] = err.message;
    return acc;
  }, {} as Record<string, string>);
};
