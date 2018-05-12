import React from 'react';

const AboutPage = () => (
  <>
    <h1>About</h1>
    <div className="card w-50">
      <div className="card-body">
        <div className="card-header">
          This application was build using the following technologies:
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nodejs</li>
          <li className="list-group-item">pm2</li>
          <li className="list-group-item">Babel</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">Webpack</li>
          <li className="list-group-item">Bootstrap</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">React Router</li>
          <li className="list-group-item">Immutable</li>
          <li className="list-group-item">Redux</li>
          <li className="list-group-item">Redux Form</li>
          <li className="list-group-item">Redux Actions</li>
          <li className="list-group-item">Redux Thunk</li>
          <li className="list-group-item">Redux Saga</li>
          <li className="list-group-item">ReSelect</li>
          <li className="list-group-item">Jest</li>
          <li className="list-group-item">Enzyme</li>
          <li className="list-group-item">npm</li>
          <li className="list-group-item">yarn</li>
        </ul>
      </div>
    </div>
  </>
);

export default AboutPage;
