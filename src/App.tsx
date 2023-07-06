import React, { useState, useMemo } from "react";
import { IconButton, Typography } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import Lamp from "./Lamp";

const App: React.FC = () => {
  const [lampStates, setLampStates] = useState([false, false, false]);

  const handleToggle = (index: number) => {
    const newLampStates = [...lampStates];
    newLampStates[index] = !newLampStates[index];
    setLampStates(newLampStates);
  };

  const handleAddLamp = () => {
    setLampStates([false, ...lampStates]);
  };

  const handleRemoveLamp = () => {
    if (lampStates.length > 0) {
      const newLampStates = [...lampStates];
      newLampStates.shift();
      setLampStates(newLampStates);
    }
  };

  const binary = useMemo(() => {
    return lampStates.map((s) => (s ? "1" : "0")).join("");
  }, [lampStates]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        {lampStates.map((isOn, index) => (
          <Lamp key={index} isOn={isOn} onToggle={() => handleToggle(index)} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 1 }}>
        <IconButton
          color="primary"
          aria-label="Add Lamp"
          onClick={handleAddLamp}
        >
          <AddCircle />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="Remove Lamp"
          onClick={handleRemoveLamp}
          disabled={lampStates.length === 0}
        >
          <RemoveCircle />
        </IconButton>
      </div>
      <div>
        <Typography variant="h6">Binary value: {binary}</Typography>
        <Typography variant="h6">
          Decimal value: {parseInt(binary, 2)}
        </Typography>
      </div>
    </div>
  );
};

export default App;
