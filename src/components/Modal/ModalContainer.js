import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const ModalContainer = ({ onClose }) => {
  const {
    WorkTime,
    setWorkTime,
    shortBreakTime,
    setshortBreakTime,
    longBreakTime,
    setlongBreakTime,
  } = useContext(StateContext);

  return (
    <Container>
      <ModalContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              work: WorkTime / 60,
              short: shortBreakTime / 60,
              long: longBreakTime / 60,
            }}
            onSubmit={(values) => {
              setWorkTime(values.work * 60);
              setshortBreakTime(values.short * 60);
              setlongBreakTime(values.long * 60);
              onClose();
            }}
          >
            {({ handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <InputWrapper>
                  <FormControl>
                    <label htmlFor="work">Work</label>
                    <Field
                      name="work"
                      type="number"
                      min="1"
                      max="60"
                      placeholder="Minutes"
                    />
                  </FormControl>
                  <FormControl>
                    <label htmlFor="short">Short Break</label>
                    <Field
                      name="short"
                      type="number"
                      min="1"
                      max="60"
                      placeholder="Minutes"
                    />
                  </FormControl>
                  <FormControl>
                    <label htmlFor="long">Long Break</label>
                    <Field
                      name="long"
                      type="number"
                      min="1"
                      max="60"
                      placeholder="Minutes"
                    />
                  </FormControl>
                </InputWrapper>
                <ButtonWrapper>
                  <SubmitButton type="submit">Apply</SubmitButton>
                </ButtonWrapper>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  );
};

export default ModalContainer;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 4rem;
  font-size: 2rem;
  background: orange;
  border-radius: 0.5rem;
  border: none;
  color: white;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
`;

const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 0.7rem;
  label {
    font-size: 1.5rem;
  }
  input {
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    background: white;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled(motion.div)`
  width: 50rem;
  height: 30rem;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    width: 90%;
    height: 40rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
  color: black;
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin-top: 2rem;
`;
