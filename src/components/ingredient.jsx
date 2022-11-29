import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Ingredient(props) {
  const style = {
    borderRadius: "5px",
    color: "white"
  };

  return (
    <div
      style={{
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "grey",
        margin: "2px"
      }}
    >
      <div style={style} className="form-check m-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="check1"
          name="option1"
          value="something"
          onChange={() => {
            props.userSelected(props.name);
          }}
        />
        <label className="form-check-label">{props.name}</label>
      </div>
    </div>
  );
}
