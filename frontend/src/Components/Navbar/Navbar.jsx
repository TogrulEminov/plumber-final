import React from "react";
import Logo from "../Logo/Logo";
import "./_Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { mainContext } from "./../../Context/Context";
const Navbar = () => {
  const { search, searchData, open,openInput ,sortedData} = useContext(mainContext);
  return (
    <div className="allNavbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 navbarLeft">
            <Logo />
          </div>
          <div className="col-6 navbarCenter">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="services">Services</Link>
              </li>
              <li>
                <Link to="features">Features</Link>
              </li>
              <li>
                <Link to="testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="Contact">Contact</Link>
              </li>
              <li>
                <Link to="page">Page</Link>
              </li>
              <li>
                <Link to="add">Add</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 navbarRight">
            <div className="search">
              <AiOutlineSearch onClick={openInput} />
              <form style={open ? { display: "block" } : { display: "none" }}>
                <input
                  type="text"
                  onChange={searchData}
                  value={search}
                  placeholder="search here .."
                />
              </form>
            </div>
            <button onClick={sortedData}>Filter by name</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
