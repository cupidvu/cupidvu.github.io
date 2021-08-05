import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/SideBarLeft";
import "./style.css";
import Footer from "./Footer";
import SideNavRight from "../SideBar/SideBarRight";
import NavBar from "../NavBar/NavBar";
import 'simplebar'; 
import 'simplebar/dist/simplebar.css';
import { Helmet } from "react-helmet";

//Layout
export default function Layout({ children, title, descript }){

    const [isMenuLeft, setMenuLeft] = useState(false);
    const toggleMenuLeft = () => {
        setMenuLeft(!isMenuLeft);
    };

    const [isMenuRight, setMenuRight] = useState(false);

    const toggleMenuRight = () => {
        setMenuRight(!isMenuRight);
    };

    const [isSearch, setSearch] = useState(false);

      useEffect(() => {
        window.scroll(0, 0);
      }, []);

    return(
        
        <React.Fragment>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={descript} />
            </Helmet>
            <div id="sidebar_menu_bg" className={isMenuLeft || isMenuRight ? "active" : ""}></div>
            <NavBar 
                    isSearch={isSearch}
                    setSearch={setSearch} 
                    toggleMenuLeft={toggleMenuLeft} 
                    toggleMenuRight={toggleMenuRight}></NavBar>
                    
            <Sidebar isMenuLeft={isMenuLeft} setMenuLeft={setMenuLeft}></Sidebar>
            <SideNavRight isMenuRight={isMenuRight} toggleMenuRight={toggleMenuRight}></SideNavRight>
            <main className="pt-fixed">
                <div className="container-general">
                    <div className="wrapper">
                        <div id="page-content-wrapper">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </main>
        </React.Fragment>
    )
}