import React from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-white">
        <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
        <p className="py-4 text-slate-700 font-semibold">{message}</p>
        <div className="modal-action">
          <button className="btn text-white font-semibold" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
