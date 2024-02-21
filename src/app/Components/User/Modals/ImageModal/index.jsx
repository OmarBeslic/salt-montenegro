import React, { useEffect,useRef }from "react";
//
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../store/slices/layoutSlice";
//
import { StyledImageModal } from "./StyledImageModal";
import CloseIcon from "@mui/icons-material/Close";

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
      <div className="image-div">
        <img loading="lazy" src={modal?.data} alt="Modal pic" title="Modal pic" ref={modalRef} />
      </div>
    </StyledImageModal>
  );
}

export default ImageModal;
