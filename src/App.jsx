import { useState } from "react";
import { LightBulb } from "./components/Main";
function App() {
  const [isOn, setIsOn] = useState(false);

  const onOff = () => {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
    console.log(isOn);
  };

  return (
    <>
      <LightBulb isOn={isOn} onOff={onOff}></LightBulb>
    </>
  );
}

export default App;
