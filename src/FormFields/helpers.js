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