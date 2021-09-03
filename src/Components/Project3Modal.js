import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import nicejob from "../imgs/NiceJob.jpg"
import { Picture } from 'react-responsive-picture'

const Project3Modal = (props) => {
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
        
        
        
        <a className="project_link" color="primary" onClick={toggle}>{buttonLabel}NiceJob!</a>
      </Form>
      <Modal size="lg" isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>

        <ModalHeader toggle={toggle}>NiceJob!</ModalHeader>
        <Picture className="modalimage"
            src={nicejob}
        />
        <ModalBody>
          
          <p>NiceJob is a simple Django application where users can track their job applications.  I created this app because I am currently on the job hunt and I am personally not a big fan of Excel sheets, so I made Nicejob to personally track my own job hunt.  
              This app is nowhere near where I want it to be but it can still be used for free and I am going to continue to update it.   </p>
        </ModalBody>
        <ModalFooter>
          
          <Button href="https://nicejob.herokuapp.com/"  color="primary">Visit</Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Project3Modal;