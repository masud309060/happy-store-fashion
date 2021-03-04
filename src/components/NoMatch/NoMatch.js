import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div className="noMatch">
      <h2>No match data found</h2>
      <h1>404!!!</h1>
      <Link to="/">
        <button> &larr; Go to home page</button>
      </Link>
    </div>
  );
};

export default NoMatch;