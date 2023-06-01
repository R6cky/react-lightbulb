import { LightBulbStyle } from "./style";
import lightBulbOn from "../../assets/onEdit1.png";
import lightBulbOff from "../../assets/ofEdit1.png";
import buttonOnOff from "../../assets/button.png";
import eyesOpen from "../../assets/eyes.png";
export const LightBulb = ({ isOn, onOff }) => {
  return (
    <LightBulbStyle>
      {isOn ? (
        <div className="light-bulb">
          <img src={lightBulbOn} alt="" />
        </div>
      ) : (
        <div className="light-bulb">
          <img src={lightBulbOff} alt="" />
        </div>
      )}
      <div className="button-on" onClick={onOff}>
        <img src={buttonOnOff} alt="" />
      </div>
    </LightBulbStyle>
  );
};
