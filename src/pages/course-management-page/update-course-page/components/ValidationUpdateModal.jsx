/* eslint-disable react/prop-types */
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ValidationUpdateModal = ({
  openModal,
  setCloseModal,
  toggleUpdate,
  validationText,
}) => {
  return (
    <Modal show={openModal} size="md" onClose={setCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center font-montserrat">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {validationText}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={toggleUpdate}>
              Iya, tentu
            </Button>
            <Button color="gray" onClick={setCloseModal}>
              Tidak
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ValidationUpdateModal;
