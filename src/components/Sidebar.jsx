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
        <div id="side" className="sidebar" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position:'sticky' , top:'0' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#37517e;">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Sidebar
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink  to="/">
            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
          </NavLink>
          <NavLink  to="/tables" >
            <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
          </NavLink>
          <NavLink  to="/profile" >
            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
          </NavLink>
          <NavLink  to="/analytics" >
            <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
          </NavLink>
          <NavLink  to="/transactions" >
            <CDBSidebarMenuItem icon="fas fa-file-invoice-dollar">Transactions</CDBSidebarMenuItem>
          </NavLink>

          <NavLink type="button"   data-bs-toggle="modal" data-bs-target="#CModal">
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