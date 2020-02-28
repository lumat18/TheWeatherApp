import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form className="inputForm" onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        placeholder="Enter city name"
        onChange={props.change}
      />
      <button>Search</button>
    </form>
  );
};

export default Form;
