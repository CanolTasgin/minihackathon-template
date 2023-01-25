import React, { useState, useEffect } from "react";
import axios from "axios";

function CalorieTracker() {
  const [foodData, setFoodData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/food")
      .then((res) => setFoodData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {Object.keys(foodData).map((foodName) => (
        <div key={foodName}>
          <p>{foodName}</p>
        </div>
      ))}
    </div>
  );
}

export default CalorieTracker;
