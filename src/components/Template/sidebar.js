import React from 'react';

function Sidebar(){

 return(
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <span className="brand-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" 
            alt="AdminLTE Logo" 
            className="brand-image img-circle elevation-3"
            style={{opacity:.8}} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
        </span>

        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                <img src="https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png"
                    className="img-circle elevation-2" alt="User Image"/>
                </div>
                <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
                </div>
            </div>
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <a href="pages/widgets.html" className="nav-link active">
                        <i className="nav-icon fas fa-th"></i>
                        <p>
                            Widgets
                            <span className="right badge badge-danger">New</span>
                        </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
  )

}

export default Sidebar;