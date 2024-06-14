import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './offcanvas.css';
import { Offensev } from './navLinks';
import NBtn from './navBtn';
const SecNav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='d-xl-none ms-auto Offcanvas-btn '  onClick={handleShow}>
        <i className="fa-solid fa-bars-staggered fa-lg"></i>
      </button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offensev>
          </Offensev>
          <NBtn></NBtn>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SecNav;