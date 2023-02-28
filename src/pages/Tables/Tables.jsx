import React from "react";
import "../campaign/Campaign.css";
import "./Tables.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/header/Header";
import CommissionTable from "../../components/CommissionTable/CommissionTable";
import { TfiReload } from "react-icons/tfi";
import { BiSearch } from "react-icons/bi";
import { FaFilter, FaDownload, FaUpload } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { RiDeleteBin6Fill, RiArrowGoBackFill } from "react-icons/ri";
import { BsChevronExpand } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

export default function Tables() {
  return (
    <div className="tables-bg">
      <Header />
      <div className="tables">
        <Sidebar />
        <div className="transaction-div">
          <div className="commission">
            <h5 className="commission-head">Commissions</h5>
            <div className="reload-icon-div">
              <TfiReload className="reload-icon" />
            </div>
          </div>
          <div className="commission-box">
            <div className="warning-jumbotron">
              <h6 className="warning-head">Warning!</h6>
              <p className="warning-text">
                If you don't see your orders here, it is possible that they are
                not tracked properly. Try to solve it with{" "}
                <a href="#">Troubleshooter.</a> To pay commissions click on{" "}
                <a href="#">Pay commissions</a>
              </p>
            </div>
            <div className="search-box">
              <form className="search-filter-form">
                <div>
                  <label className="search-label" for="cars">
                    Search in
                  </label>
                  <select className="all-select" id="All" name="All">
                    <option value="all">All</option>
                    <option value="some">Some</option>
                    <option value="part">part</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="search-div">
                  <label className="for-search" for="search-input">
                    for
                  </label>
                  <input
                    className="search-input"
                    type="text"
                    id="search-input"
                    name="search-input"
                  ></input>
                </div>
                <button className="search-button">
                  Search
                  <BiSearch className="search-icon" />
                </button>
                <button className="filter-btn">
                  <FaFilter />
                </button>
              </form>
            </div>
            <div className="btn-box">
              <div className="btn-div">
                <div className="btn-div-1">
                  <button className="commission-btn">
                    <SiAddthis /> Add commission
                  </button>
                  <button className="commission-btn ms-2">
                    <FaDownload /> Import transactions
                  </button>
                </div>
                <div className="btn-div-2">
                  <button className="delete-btn">
                    <RiDeleteBin6Fill /> Delete
                  </button>
                  <button className="status-btn ms-2">
                    <BsChevronExpand /> Change status
                  </button>
                </div>
                <div className="btn-div-3">
                  <button className="refund-btn">
                    <RiArrowGoBackFill /> Refund Management
                  </button>
                  <button className="export-btn ms-2">
                    <FaUpload /> Export CSV
                  </button>
                </div>
              </div>
              <div>
                <select
                  className="referrer-select"
                  id="referrer"
                  name="referrer code"
                >
                  <option value="referrer">referrer code</option>
                  <option value="some">Some</option>
                  <option value="part">part</option>
                  <option value="audi">Audi</option>
                </select>
                <button className="edit-btn">
                  <MdModeEditOutline />
                </button>
              </div>
            </div>
            <CommissionTable/>
          </div>
        </div>
      </div>
    </div>
  );
}
