import React from "react";

interface ToggleSwitchProps {
  switchTypeOfEnergy: (event: any) => void;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { switchTypeOfEnergy } = props;

  return (
    <>
      <form noValidate>
        <input
          className="demo2 electricity"
          onClick={switchTypeOfEnergy}
          type="radio"
          name="nameOfEnergy"
          value="electricity"
          checked
        />
        <label htmlFor="electricity">Electricité</label>

        <input
          className="demo2 gas"
          type="radio"
          name="nameOfEnergy"
          value="gas"
          onChange={switchTypeOfEnergy}
        />
        <label htmlFor="gas">Gaz</label>
      </form>
    </>
  );
};

export default ToggleSwitch;
