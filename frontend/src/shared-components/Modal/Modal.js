import {
  ModalContainer,
  ModalHeader,
  BackDrop,
  ModalWrapper,
  Title,
} from "./Modal.styles";

const Modal = (props) => {
  const { showModal, closeModal, children } = props;
  return (
    <BackDrop show={showModal}>
      <ModalContainer>
        <ModalWrapper>
          <Title>Add User</Title>
          <ModalHeader onClick={closeModal}> &times; </ModalHeader>
        </ModalWrapper>

        {children}
      </ModalContainer>
    </BackDrop>
  );
};

export default Modal;
