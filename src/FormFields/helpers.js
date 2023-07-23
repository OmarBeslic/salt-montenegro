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

export const convertToCompressedWebP = async (instagramImageUrl) => {
  try {
    // Fetch the image data from the provided link
    const response = await fetch(instagramImageUrl);
    const blob = await response.blob();

    // Create a temporary HTML Image element to read the original image's dimensions
    const img = new Image();
    const imageURL = URL.createObjectURL(blob);
    img.src = imageURL;

    return new Promise((resolve, reject) => {
      // Wait for the image to load to get its original dimensions
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxFileSizeInBytes = 500 * 1024; // 500kb
        const maxWidth = 1024; // You can adjust this to the desired maximum width
        const compressionQuality = 0.7; // You can adjust this value to balance quality and size

        let width = img.width;
        let height = img.height;

        // Resize the image if its width is larger than the maximum allowed width
        if (width > maxWidth) {
          const aspectRatio = width / height;
          width = maxWidth;
          height = Math.floor(width / aspectRatio);
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Convert the canvas data to a compressed WebP format
        canvas.toBlob(
          (compressedBlob) => {
            // Check if the compressed image size is within the allowed limit
            if (compressedBlob.size <= maxFileSizeInBytes) {
              resolve(compressedBlob);
            } else {
              reject(new Error("Compressed image size exceeds 500kb limit."));
            }
          },
          "image/webp",
          compressionQuality
        );
      };

      // Handle errors while loading the image
      img.onerror = () => {
        reject(new Error("Failed to load the image."));
      };
    });
  } catch (error) {
    throw new Error("Error converting image: " + error.message);
  }
};
