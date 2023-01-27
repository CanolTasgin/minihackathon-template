import React, { useState } from "react";
import axios from "axios";
import "./FormComponent.css";

const FormComponent = () => {
  const [textField1, setTextField1] = useState("");
  const [textField2, setTextField2] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { textField1, textField2, checkbox, dropdown };
    axios
      .post("http://0.0.0.0:8333/data", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Text Field 1:
        <input
          className="input"
          type="text"
          value={textField1}
          onChange={(e) => setTextField1(e.target.value)}
        />
      </label>
      <br />
      <label className="label">
        Text Field 2:
        <input
          className="input"
          type="text"
          value={textField2}
          onChange={(e) => setTextField2(e.target.value)}
        />
      </label>
      <br />
      <label className="label">
        Checkbox:
        <input
          className="checkbox"
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </label>
      <br />
      <label className="label">
        Dropdown:
        <select
          className="select"
          value={dropdown}
          onChange={(e) => setDropdown(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <br />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
