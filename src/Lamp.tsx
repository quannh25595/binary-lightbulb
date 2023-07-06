import React from "react";
import { Switch, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

interface LampProps {
  isOn: boolean;
  onToggle: (newValue: boolean) => void;
  place: number;
  placeVisible: boolean;
}

const Lamp: React.FC<LampProps> = ({ isOn, onToggle, place, placeVisible }) => {
  const handleSwitchChange = () => {
    onToggle(!isOn);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {placeVisible && <Typography variant="h4">{place}</Typography>}
        <LightbulbIcon
          sx={{
            fontSize: 48,
            color: isOn ? "orange" : "grey",
          }}
        />
        <Switch checked={isOn} onChange={handleSwitchChange} />
      </div>
    </div>
  );
};

export default Lamp;
