import React from "react";
import { NavLink } from "react-router-dom";
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
        <div id="side" style={{ display: 'flex', marginTop:40, height: '100vh', overflow: 'scroll initial', position:'fixed' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#37517e;">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Sidebar
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/tables" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/profile" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/analytics" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/transactions" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="fas fa-file-invoice-dollar">Transactions</CDBSidebarMenuItem>
          </NavLink>

          <NavLink type="button"  activeClassName="activeClicked" data-bs-toggle="modal" data-bs-target="#CModal">
          <CDBSidebarMenuItem icon="plus">Add A Campaign</CDBSidebarMenuItem>
          </NavLink>
   
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