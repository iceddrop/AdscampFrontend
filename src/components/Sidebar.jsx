import React from "react";
import { Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


const Sidebar = () =>{
return (
    <>
        <div style={{ display: 'flex', marginTop:40, height: '100vh', overflow: 'scroll initial', position:'fixed' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#37517e;">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Sidebar
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <Link exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
          </Link>
          <Link exact to="/tables" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
          </Link>
          <Link exact to="/profile" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
          </Link>
          <Link exact to="/analytics" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
          </Link>

          <Link exact to="/hero404" target="_blank" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '20px 5px',
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
    </>
)
}

export default Sidebar;