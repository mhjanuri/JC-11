import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    modal,
    className,
    title,
    toggle,
    actionfunc
  } = props;

  
  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle} className={className} centered>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={actionfunc}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;