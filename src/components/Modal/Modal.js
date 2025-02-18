import React from "react";
import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";
import { AnimatePresence } from "framer-motion";
const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop />
            <ModalContainer onClose={onClose} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
