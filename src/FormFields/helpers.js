import { toast } from "react-toastify";

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
export const getClassName = (index) => {
  if ((index + 1) % 7 === 0) {
    return "big";
  }
  if ((index + 1) % 4 === 0) {
    return "wide";
  }
  if ((index + 1) % 3 === 0) {
    return "long";
  }
  return "";
};
export const showToast = (type, message) => {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: type === "success",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  toast[type](message, toastOptions);
};
export const validatePhoneNumber = (phoneNumber) => {
  // Regular expression pattern to match phone number with allowed characters (+,-,(,))
  const phonePattern = /^[+()\-0-9\s]+$/;

  // Check if the phone number matches the pattern
  if (!phonePattern.test(phoneNumber)) {
    return false; // Phone number is not valid
  }

  return true; // Phone number is valid
};

// Function to validate email
export const validateEmail = (email) => {
  // Regular expression pattern to match email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  if (!emailPattern.test(email)) {
    return false; // Email is not valid
  }

  return true; // Email is valid
};
export const scrollToDiv = (refDiv) => {
  const yOffset = -100;
  const element = refDiv.current;
  const y =
    element?.getBoundingClientRect()?.top + window?.pageYOffset + yOffset;

  window?.scrollTo({ top: y, behavior: "smooth" });
};
