import React from "react";

interface ToggleSwitchProps {
  switchTypeOfEnergy: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { switchTypeOfEnergy } = props;

  return (
    <>
      <div className="toggle__container">
        <input
          className="electricity"
          onClick={switchTypeOfEnergy}
          type="radio"
          name="nameOfEnergy"
          value="electricity"
        />
        <label htmlFor="electricity">Electricité</label>

        <input
          className="gas"
          type="radio"
          name="nameOfEnergy"
          value="gas"
          onClick={switchTypeOfEnergy}
          defaultChecked
        />
        <label htmlFor="gas">Gaz</label>
      </div>
    </>
  );
};

export default ToggleSwitch;
