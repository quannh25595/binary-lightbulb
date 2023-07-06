import React, { useState, useMemo } from "react";
import {
  Card,
  IconButton,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CardContent,
} from "@mui/material";
import { AddCircle, RemoveCircle, StopCircle } from "@mui/icons-material";
import Lamp from "./Lamp";

function findNumberAtPosition(n: number) {
  if (n === 1) {
    return 1;
  }

  let number = 1;
  for (let i = 2; i <= n; i++) {
    number *= 2;
  }

  return number;
}

const App: React.FC = () => {
  const [lampStates, setLampStates] = useState([false, false, false]);
  const [showDecimal, setShowDecimal] = useState(true);
  const [showPlaces, setShowPlaces] = useState(false);

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

  const resetLamp = () => {
    setLampStates((prev) => prev.map((it) => false));
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
      <div style={{ position: "fixed", top: 25, left: 25 }}>
        <Card>
          <CardContent>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showDecimal}
                    onChange={() => setShowDecimal(!showDecimal)}
                  />
                }
                label="Show decimal"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPlaces}
                    onChange={() => {
                      setShowPlaces(!showPlaces);
                    }}
                  />
                }
                label="Show places"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {lampStates.map((isOn, index) => (
          <Lamp
            key={index}
            isOn={isOn}
            onToggle={() => handleToggle(index)}
            place={findNumberAtPosition(lampStates.length - index)}
            placeVisible={showPlaces}
          />
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
        <IconButton
          color="error"
          aria-label="Reset"
          onClick={resetLamp}
          disabled={lampStates.length === 0}
        >
          <StopCircle />
        </IconButton>
      </div>
      <div>
        <Typography variant="h6">Binary value: {binary}</Typography>
        {showDecimal && (
          <Typography variant="h6">
            Decimal value: {parseInt(binary, 2)}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default App;
