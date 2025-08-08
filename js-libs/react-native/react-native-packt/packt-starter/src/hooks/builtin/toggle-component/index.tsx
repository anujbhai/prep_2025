import { useState } from "react";
import CleanupTimerEffect from "../cleanup-effects";

interface IShowTimerProps {
  show: boolean;
}

const ToggleTimer = ({ show }: IShowTimerProps) => (show ? <CleanupTimerEffect /> : null);

function ToggleCpmponent() {
  const [show, setshow] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setshow(!show)}>
        {show ? "Hide timer" : "Show timer"}
      </button>

      <ToggleTimer show={show} />
    </>
  );
}

export default ToggleCpmponent;

