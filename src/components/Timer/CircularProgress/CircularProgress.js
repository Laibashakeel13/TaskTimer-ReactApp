import styled from "styled-components";
import { useContext, useEffect } from "react";
import Clock from "./Clock/Clock";
import { StateContext } from "../../StateProvider";

const CircularProgress = () => {
  const { Progress, setProgress, Time, initTime } = useContext(StateContext);

  useEffect(() => {
    setProgress(Time / (initTime / 100));
  }, [setProgress, Time]);

  return (
    <div>
      <OuterCircle $progress={Progress}>
        <InnerCircle>
          <Clock />
        </InnerCircle>
      </OuterCircle>
    </div>
  );
};

export default CircularProgress;

const OuterCircle = styled.div`
  width: 24rem;
  height: 24rem;
  background: grey;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    grey ${({ $progress }) => $progress}%,
    transparent ${({ $progress }) => $progress}%
  );
`;

const InnerCircle = styled.div`
  width: 23rem;
  height: 23rem;
  background: black;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
