import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [WorkTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setshortBreakTime] = useState(5 * 60);
  const [longBreakTime, setlongBreakTime] = useState(30 * 60);

  const [initTime, setinitTime] = useState(0);

  const [activeTag, setActiveTag] = useState(0);
  const [Progress, setProgress] = useState(5);
  const [Time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(WorkTime);
        setinitTime(WorkTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setinitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setinitTime(longBreakTime);
        break;
    }
  }, [activeTag, WorkTime, shortBreakTime, longBreakTime]);
  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        Progress,
        setProgress,
        Time,
        setTime,
        isActive,
        setIsActive,
        WorkTime,
        setWorkTime,
        shortBreakTime,
        setshortBreakTime,
        longBreakTime,
        setlongBreakTime,
        initTime,
        setinitTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
