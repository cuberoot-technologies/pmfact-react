import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiFilter } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const LsPermformance = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="ls-performance">
          <div className="ls-performance-left">
            <h1>LS Performance</h1>
            <p>Updated data: till 23 Sep 2020</p>
          </div>
          <div className="ls-performance-right">
            <Link to="/filter">
              {" "}
              <span>
                <FiFilter />
                Filter
              </span>
            </Link>
          </div>
        </div>
        <div className="read-before">
          <p onClick={handleShow}>
            <BiErrorCircle />
          </p>
          <p>Read before check performance</p>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div className="modal-hover-text">
                <p>
                  During the proceedings of the Parliament, MPs mark their
                  attendance by signing a register kept there. The basis of the
                  rating and ranking of the attendance is based on the number of
                  days prescribed for the meetings of the Lok Sabha and the
                  signature of the members in the register. It is not mandatory
                  for the Ministers, Prime Minister,
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default LsPermformance;
