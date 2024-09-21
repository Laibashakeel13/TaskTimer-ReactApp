import styled from "styled-components";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { FaCog } from "react-icons/fa";

const Title = styled.h1`
  background-color: #282c34;
  font-size: 3rem;
  padding: 2rem 0;
  text-align: center;
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  cursor: pointer;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Title>TaskTimer</Title>
      <Tags />
      <Timer />
      <Modal isOpen={isOpen} onClose={onClose} />
      <CogIcon onClick={onOpen}>
        <FaCog />
      </CogIcon>
    </>
  );
}

export default App;
