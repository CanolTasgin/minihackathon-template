import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

function SymptomTracker() {
  const [symptomData, setSymptomData] = useState({});
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://0.0.0.0:8333/symptom")
      .then((res) => setSymptomData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://0.0.0.0:8333/add_data", { symptom_name: selectedSymptom })
      .then((res) => {
        setAlertType("success");
        setAlertMessage("Symptom added successfully");
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertType("danger");
        setAlertMessage("Failed to add symptom");
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
        value={selectedSymptom}
        onChange={(e) => setSelectedSymptom(e.target.value)}
      >
        {Object.keys(symptomData).map((symptomName) => (
          <option key={symptomName} value={symptomName}>
            {symptomName}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SymptomTracker;
