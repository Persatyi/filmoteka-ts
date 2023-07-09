import React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Overlay from "components/Overlay";

interface IProps {
  onClose: Function;
  open: boolean;
  children: JSX.Element;
}

const ModalWrapper: React.FC<IProps> = ({ onClose, open, children }) => {
  const modalRef = useRef(document.getElementById("modal-root"));

  useEffect(() => {
    const onEscPress = (e: { code: string }) => {
      if (e.code === "Escape") onClose();
    };
    window.addEventListener("keydown", onEscPress);
    return () => window.removeEventListener("keydown", onEscPress);
  }, [onClose]);

  return open
    ? createPortal(
        <Overlay onClose={onClose} open={open}>
          {children}
        </Overlay>,
        modalRef.current!
      )
    : null;
};

export default ModalWrapper;
