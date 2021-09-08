import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import nicejob from "../imgs/NiceJob.jpg"
import { Picture } from 'react-responsive-picture'
import alien from '../imgs/alien.mp4'

const Project4Modal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  const changeKeyboard = e => {
    setKeyboard(e.currentTarget.checked);
  }
  

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        
        
        
        <a className="project_link" color="primary" onClick={toggle}>{buttonLabel}Alien Invasion</a>
      </Form>
      <Modal size="lg" isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>

        <ModalHeader toggle={toggle}>Alien Invasion</ModalHeader>
        
        <ModalBody>
        <video width="750"  controls>
              <source src ={alien} type="video/mp4"></source>

          </video>
          <p>Alien Invasion is my take on the classic game Space Invaders.  I built this game using Python and Pygame.</p>
        </ModalBody>
        <ModalFooter>
          
          <Button href="https://github.com/Mikey-Simmons/alien_invasion"  color="primary">Visit Repo</Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Project4Modal;