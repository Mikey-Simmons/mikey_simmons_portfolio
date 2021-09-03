import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import appconnect from "../imgs/appconnect.jpg"
import { Picture } from 'react-responsive-picture'

const Project1Modal = (props) => {
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
        
        
        
        <a className="project_link" color="primary" onClick={toggle}>{buttonLabel}Apartment Connect</a> 
      </Form>
      <Modal size="lg" isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>

        <ModalHeader toggle={toggle}>Apartment Connect</ModalHeader>
        <Picture className="modalimage"
            src={appconnect}
        />
        <ModalBody>
          
          <p>Apartment Connect is an apartmnet management application where apartment renters can submit maintenance requests and reserve gym times.  Maintenance workers can also use the application to see all of the maintenance requests and mark them completed.  
            We deployed the app using AWS.  The app was made by Trey Danks, Blake Bonasera, Nathaniel Burge, and I using the M.E.R.N. stack (MongoDB, ExpressJS, ReactJs, Nodejs).  </p>
        </ModalBody>
        <ModalFooter>
          
          <Button href="http://ec2-18-218-231-53.us-east-2.compute.amazonaws.com/"  color="primary">Visit</Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Project1Modal;