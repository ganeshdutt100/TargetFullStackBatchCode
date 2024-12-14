import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        {/* Tabs navs */}
        <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active text-danger"
              id="tab1-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab1"
              type="button"
              role="tab"
              aria-controls="tab1"
              aria-selected="true"
            >
              Tab 1
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-danger"
              id="tab2-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab2"
              type="button"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
            >
              Tab 2
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="tab3-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab3"
              type="button"
              role="tab"
              aria-controls="tab3"
              aria-selected="false"
            >
              Tab 3
            </button>
          </li>
        </ul>
        {/* Tabs content */}
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active text-danger"
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-tab"
          >
            Tab 1 content
          </div>
          <div
            className="tab-pane fade text-danger"
            id="tab2"
            role="tabpanel"
            aria-labelledby="tab2-tab"
          >
            Tab 2 content
          </div>
          <div
            className="tab-pane fade"
            id="tab3"
            role="tabpanel"
            aria-labelledby="tab3-tab"
          >
            Tab 3 content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
