import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form className="input-form" onSubmit={props.submit}>
      <input
        className="input-box"
        type="text"
        value={props.value}
        placeholder="Enter city name"
        onChange={props.change}
      />
      <button className="submit-button">Search</button>
    </form>
  );
};

export default Form;
