import Button from "./Button";

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
          <button
            className="btn rounded-full px-6 py-3 text-white font-semibold hover:bg-slate-300 border-transparent hover:text-black border-2 hover:border-black"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
