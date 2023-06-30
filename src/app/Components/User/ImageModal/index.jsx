import React from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { openModal } from "../../../store/slices/layoutSlice";
//
import { StyledImageModal } from "./StyledImageModal";
import CloseIcon from "@mui/icons-material/Close";
import { useRef } from "react";
import { useEffect } from "react";

function ImageModal() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const modal = useSelector((state) => state.layout?.modal);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(openModal({ name: null, isOpen: false, data: null }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledImageModal isOpen={modal?.isOpen}>
      <CloseIcon
        onClick={() =>
          dispatch(openModal({ name: null, isOpen: false, data: null }))
        }
      />
      <div ref={modalRef} className="image-div">
        <img src={modal?.data} alt="" />
      </div>
    </StyledImageModal>
  );
}

export default ImageModal;
