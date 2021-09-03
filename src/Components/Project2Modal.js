import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import forsale from "../imgs/4Sale.jpg"
import { Picture } from 'react-responsive-picture'

const Project2Modal = (props) => {
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
        
        
        
        <a className="project_link" color="primary" onClick={toggle}>{buttonLabel}4Sale</a>
      </Form>
      <Modal size="lg" isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>

        <ModalHeader toggle={toggle}>4Sale</ModalHeader>
        <Picture className="modalimage"
            src={forsale}
        />
        <ModalBody>
          
          <p>4Sale is an application for local users to buy and sell shoes/clothing.  We built the app using the Django framework.  Sellers can post pictures with descriptions of the item they are selling, and buyers can favorite items they might want to purchase as well as email the sellers directly from the site.  
              This app was developed by Blake Bonasera, Tia Foorohi, and I. </p>
        </ModalBody>
        <ModalFooter>
          
          <Button href="https://github.com/blakebonasera/4Sale"  color="primary">Visit Repo</Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Project2Modal;