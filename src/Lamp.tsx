import React from "react";
import { Switch, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

interface LampProps {
  isOn: boolean;
  onToggle: (newValue: boolean) => void;
}

const Lamp: React.FC<LampProps> = ({ isOn, onToggle }) => {
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
        <Typography variant="h4">{isOn ? "1" : "0"}</Typography>
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
