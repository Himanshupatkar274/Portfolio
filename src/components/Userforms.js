import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Userforms() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState([]);
  const [isToggle, setIsToggle] = useState(false);


  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setUserData(response.data);
    });
  },[]);

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

  const handleClick = ()=>{
    setIsToggle(abc => !abc)
  }
  return (
    <>
      <div className="container my-3  w-50">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type= {isToggle ? 'text':'password'}
              className="form-control"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <span className="input-group-text cursor-pointer" id="basic-addon2" onClick={handleClick}>
                {
                 isToggle ?  <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>
                }
            </span>
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
              <tbody key={data.id ? data.id : ''}>
                <tr>
                  <th scope="row">{data.id ? data.id : ''}</th>
                  <td>{data.title? data.title : ''}</td>
                  <td>{data.body? data.body : ''}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
