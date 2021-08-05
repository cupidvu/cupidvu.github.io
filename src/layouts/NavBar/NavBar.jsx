import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import usePosition from "../../hooks/usePosition";
import Search from "../../fetures/Search/Search";
import logo from "../../assets/img/logo.png";

export default function NavBar({ ...props }) {
    
    const [isSearch, setSearch] = useState(false);
    const position = usePosition();

    return (
            <div className={`fixed-header ${position > 70 ? "bg-shadow" : ""}`}>
                <div className="container">
                    <div className="mobie_menu">
                        <span onClick={() => props.toggleMenuLeft(props.className)} className="menu-left">
                            <i className="fas fa-bars"></i>
                        </span>
                    </div>
                    <div className="logo">
                        <Link to="/" title="AnimeAB">
                            <img src={logo} alt="AnimeAB"/>
                        </Link>
                    </div>
                    <div className={isSearch ? "search open" : "search"}>	
                        <Search></Search>
                    </div>
                    <div className="mobie__search" onClick={() => setSearch(!isSearch)}>
                        <i className="fas fa-search"></i>
                    </div>
                    <span onClick={() => props.toggleMenuRight()} className="toggle-open-close-right">
                        <i className="fas fa-bars"></i>
                    </span>
                </div>
            </div>
     )
}