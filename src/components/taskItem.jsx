import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TaskItem({ removeItem, id, name }) {
  return (
    <div className="mt-2">
      <div className="card">
        <div className="card-body justify-content-between">
          {name}
          <span
            style={{
              float: "right",
              paddingLeft: "20px"
            }}
          >
            <button
              style={{ border: "0px", borderRadius: "4px", padding: "2px" }}
              onClick={() => {
                removeItem(id);
              }}
            >
              <span role="img" aria-label="delete">
                🗑️
              </span>
            </button>
          </span>
          <span
            style={{
              float: "right",
              paddingLeft: "20px"
            }}
          >
            <button
              style={{ border: "0px", borderRadius: "4px", padding: "2px" }}
            >
              <span role="img" aria-label="delete">
                ✏️
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
