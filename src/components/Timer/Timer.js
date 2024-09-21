import styled from "styled-components";
import CircularProgress from "./CircularProgress/CircularProgress";
const Timer = () => {
  return (
    <div>
      <TimerContainer>
        <CircularProgress />
      </TimerContainer>
    </div>
  );
};

export default Timer;
const TimerContainer = styled.div`
  background: conic-gradient(
    ${(props) => props.theme.colors.black},
    ${(props) => props.theme.colors.grey} 150deg,
    ${(props) => props.theme.colors.black}
  );
  width: 30rem;
  height: 30rem;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  box-shadow: -50px -50px 150px rgba(158, 158, 158, 0.2),
    50px -10px 100px rgba(0, 0, 0, 0.5);
`;
