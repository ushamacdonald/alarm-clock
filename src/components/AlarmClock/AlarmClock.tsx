import { useState, useEffect, FC } from "react";
import "src/components/AlarmClock/alarm-clock.css";

export const AlarmClock: FC = () => {
  const [time, setTime] = useState(["00", "00"]);

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString().split(":");
      setTime(time);
    }, 1000);
  }, []);

  return (
    <div className="alarm-clock__container">
      <div className="alarm-clock">
        {/* <div>
        <button className="alarm-clock__button"></button>
        <button className="alarm-clock__button">HH</button>
        <button className="alarm-clock__button">MM</button>
      </div> */}
        <div className="alarm-clock__panel">
          <span className="alarm-clock__time">{time[0]}</span>
        </div>
        <div className="alarm-clock__panel">
          <span className="alarm-clock__time">{time[1]}</span>
        </div>
        {/* <div className="alarm-clock__panel">
        <span className="alarm-clock__time">{time[2]}</span>
      </div> */}
      </div>
    </div>
  );
};
