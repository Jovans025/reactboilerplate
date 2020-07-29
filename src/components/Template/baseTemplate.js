import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

export default ({ children }) => {
  return (
    <div id="wrapper">
      <Header/>
      <Sidebar/>
      <div className="content-wrapper">
        <div className="content">
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};