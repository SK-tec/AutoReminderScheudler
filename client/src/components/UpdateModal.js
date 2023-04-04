import { Modal } from "react-bootstrap"; 
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const UpdateModal = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>Data updated successfully</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default UpdateModal;