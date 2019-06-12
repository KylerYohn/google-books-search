import React from "react";

function BookList(props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.results.length ? "Featured Books" : "No Books Found"}
      </div>
      <div className="card-body">
        {props.results.length
          ? props.results.map((data, i) => {
              return (
                <div className="card">
                  <div className="card-title">
                    {data.volumeInfo.title}
                    <button className="btn btn-danger">
                      <a
                        style={{ color: "black" }}
                        href={data.volumeInfo.previewLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        View
                      </a>
                    </button>
                    <button
                      onClick={e => props.onClick(data, e)}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                  Author: {data.volumeInfo.authors[0]}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={data.volumeInfo.imageLinks.smallThumbnail}
                          class="rounded float-left"
                          alt="book"
                        />
                      </div>
                      <div className="col-8">
                        {data.volumeInfo.description
                          ? data.volumeInfo.description
                          : "No current description avalible"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No books have been found or searched yet!"}
      </div>
    </div>
  );
}

export default BookList;
