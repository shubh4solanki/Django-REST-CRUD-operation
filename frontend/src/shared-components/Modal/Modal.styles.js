import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: #f5f5f5;
  padding: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
  border-radius: 6px;
  transition: all 0.3s ease-out;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalHeader = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 30px;
`;

export const BackDrop = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
`;
