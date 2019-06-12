import React from "react";

function RenderSaved(props) {
  return (
    <div className="card-body">
      {props.results.length
        ? props.results.map((data, i) => {
            return (
              <div className="card">
                <div className="card-title">
                  {data.title}
                  <button className="btn btn-primary">
                    <a
                      style={{ color: "black" }}
                      href={data.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View
                    </a>
                  </button>
                  <button
                    onClick={e => props.onClick(data, e)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
                Author: {data.authors}
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={data.image}
                        class="rounded float-left"
                        alt="book"
                      />
                    </div>
                    <div className="col-8">
                      {data.description
                        ? data.description
                        : "No current description avalible"}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "No books have been found or searched yet!"}
    </div>
  );
}

export default RenderSaved;
