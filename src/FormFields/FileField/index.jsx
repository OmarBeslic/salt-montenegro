import React from "react";
import { useState } from "react";
import { StyledFile } from "./StyledFile";
import { convertBase64 } from "../helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function File({ getFile, ...props }) {
  const [file, setFile] = useState();

  const validateField = (bytes) => {
    let megaByte = bytes / (1024 * 1024);
    return (
      megaByte > 28 &&
      toast.error("Your file must be under 28mb!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    );
  };

  const handleChange = async (e) => {
    let filePath = e?.target?.files?.[0];
    const base64 = await convertBase64(filePath);
    setFile(base64);
    getFile(base64);

    validateField(filePath?.size);
  };

  return (
    <StyledFile {...props}>
      <ToastContainer />
      <input
        type="file"
        onChange={handleChange}
        hidden
        id="upload"
        accept="image/*"
      />
      <span></span>
      <label htmlFor="upload">Choose Image</label>
      <img src={file} />
    </StyledFile>
  );
}

export default File;
