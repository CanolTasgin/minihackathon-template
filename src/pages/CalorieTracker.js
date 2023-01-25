import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

function CalorieTracker() {
  const [foodData, setFoodData] = useState({});
  const [selectedFood, setSelectedFood] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/food")
      .then((res) => setFoodData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/add_data", { food_name: selectedFood })
      .then((res) => {
        setAlertType("success");
        setAlertMessage("Food added successfully");
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertType("danger");
        setAlertMessage("Failed to add food");
        setShowAlert(true);
      });
  };

  return (
    <div>
      {showAlert && (
        <Alert
          variant={alertType}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
      <select
        value={selectedFood}
        onChange={(e) => setSelectedFood(e.target.value)}
      >
        {Object.keys(foodData).map((foodName) => (
          <option key={foodName} value={foodName}>
            {foodName}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CalorieTracker;
