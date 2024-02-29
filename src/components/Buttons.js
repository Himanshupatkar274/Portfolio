import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/main.css";
export default function Buttons() {
  return (
    <>
      <div className="text-center mt-5">
            <div className="buttons-group">
                <Link to="/" className="btn btn-primary">Home</Link>
                <Link to="/Certificates" className="btn btn-primary">Certificates</Link>
                <Link to="/Projects" className="btn btn-primary">Projects</Link>
                <Link to="/Skills" className="btn btn-primary">Skills</Link>
                <Link to="/Contact" className="btn btn-primary">Contact US</Link>
            </div>
          </div>
    </>
  )
}
