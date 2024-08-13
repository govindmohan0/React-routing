/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div>
        <h1>Page Not found</h1>
    <Link to="/">Go to Home page</Link>
    </div>
  );
}

export default Notfound;