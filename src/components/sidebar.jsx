import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Sidebar(props) {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await axios.get(
        "https://dundermiff-sys.herokuapp.com/api/departments"
      );
      setDepartments(res.data);
    };
    fetchDepartments();
  }, []);

  return (
    <div>
      <div className="flex-shrink-0 p-3 bg-white" style={{ width: "250px" }}>
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi me-2" width="30" height="24"></svg>
          <span className="fs-5 fw-semibold">Departments</span>
        </a>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              onClick={() => props.onDepartmentSelect()}
              className="btn btn-light btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              All
            </button>
          </li>
          {departments.map((deps) => (
            <li
              className="mb-1"
              key={deps._id}
              onClick={() => props.onDepartmentSelect(deps._id)}
            >
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                {deps.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
