import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title" style={{ fontSize: 40 }}>
          Search Your books here!
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
