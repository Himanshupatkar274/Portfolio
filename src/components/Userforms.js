import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Userforms() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState([]);

  const getUserData = () => {
    axios.get(apiUrl).then((response) => {
      setUserData(response.data);
    });
  };

  useEffect(() => {
    getUserData();
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };
  return (
    <>
      <div className="container my-3  w-50">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary form-control w-25">
            Submit
          </button>
        </form>
      </div>
      <div className="container my-3 w-50">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          {userData.map((data, index) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
