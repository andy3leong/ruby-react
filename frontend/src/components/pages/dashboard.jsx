
import React from 'react';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'reactstrap';

export default () => (
  <div id="page-dashboard">
    <Jumbotron>
      <h1>Welcome to Time Management System</h1>
      <p>Developed by Hanson Rynsburger with Ruby On Rails
      for back end and React/Redux/Saga for frontend</p>

      <p className="lead">
        <Link to="/hours">
          <Button color="primary">Get Started</Button>
        </Link>
      </p>
    </Jumbotron>
  </div>
);
