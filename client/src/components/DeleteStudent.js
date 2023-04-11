import axios from "../axiosInstance";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
const DeleteStudent = ({ id, setIsUpdated }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [status, setStaus] = useState(false);
  const showMessage = () => setStaus(true);
  const closeMessage = () => setStaus(false);
  const handleRemove = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .delete(`/api/students/${id}`)
        .then((res) => {
          console.log(res.data);
          setMessage(`Student Record with Id ${id} Deleted`);
          showMessage();
          navigate(`/admin`);
          setIsUpdated(true);
        })
        .catch((err) => {
          setMessage("Record not found");
          showMessage();
          console.log(err);
        });
    }
  };
  return (
    <>
      <Button variant="link" onClick={handleRemove}>
        <i className="bi bi-trash"></i>
      </Button>
      <Modal show={status} onHide={closeMessage} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeMessage}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteStudent;
