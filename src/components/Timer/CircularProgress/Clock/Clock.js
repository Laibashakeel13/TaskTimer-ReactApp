import styled from "styled-components";
import { useEffect, useContext } from "react";
import { StateContext } from "../../../StateProvider";
const Clock = () => {
  const { Time, setTime, isActive, setIsActive, initTime } =
    useContext(StateContext);

  useEffect(() => {
    let interval;

    if (isActive && Time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && Time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, Time]);

  const GetTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const Toggle = () => {
    setIsActive(!isActive);
  };

  const ResetButton = () => {
    setTime(initTime);
    setIsActive(false);
  };
  return (
    <ClockContainer>
      <TimerText>{GetTime(Time)}</TimerText>
      <Pause onClick={Toggle}>{isActive ? "Pause" : "Start"}</Pause>
      {Time === 0 && <Reset onClick={ResetButton}> RESET </Reset>}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;

const TimerText = styled.h3`
  font-size: 5rem;
`;

const Pause = styled.button`
  all: unset;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`;

const Reset = styled(Pause)`
  color: grey;
`;
