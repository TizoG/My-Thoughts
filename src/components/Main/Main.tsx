import { useState } from "react";
import { Card } from "../Card/Card";
import { Modal } from "../Modal/Modal";
import "./style.css";

export function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section>
      <div className="content__button">
        <input
          type="text"
          placeholder="¿En que estas pensando?"
          onClick={openModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
      <Card />
    </section>
  );
}
