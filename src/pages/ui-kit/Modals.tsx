import { useState } from "react";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    // Perform your confirm action here
    console.log("Confirmed!");
    setIsModalOpen(false); // Close modal after confirmation
  };

  return (
    <div className="p-4">
      <Button title="Open Modal" onClick={handleOpenModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Open Modal
      </Button>

      {/* Modal component usage */}
      <Modal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Confirmation"
        onConfirm={handleConfirm}
        confirmText="Confirm Action"
      >
        <p>This is an example modal with confirmation. Do you want to proceed?</p>
      </Modal>
    </div>
  );
};

export default Modals;
