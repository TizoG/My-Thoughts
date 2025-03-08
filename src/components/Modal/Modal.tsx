import "./style.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Este es un cuadro de diálogo</h2>
        <input type="text" className="modal-input" />
        <h2>Aquí va el contenido del modal.</h2>
        <textarea name="" id="" className="modal-text"></textarea>
        <button className="close-btn" onClick={onClose}>
          Cerrar
        </button>
        <button className="close-btn">Publicar</button>
      </div>
    </div>
  );
}

export default Modal;
