import { useEffect, useState } from "react";

function CleanupTimerEffect() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>Timer: {timer}</p>;
}

export default CleanupTimerEffect;

