import { Link } from "react-router-dom";
import React from "react";
import Layout from "../../layouts/Layout/Layout";
import Error404 from "../../assets/img/404.png";
import "./no-match.css";

export default function NoMatch(){

    return(
        <Layout title="AnimeAB - Error 404" descript="AnimeAB VietSub Online Free">
            <div className="no-match text-center">
                <div className="no-match-img"><img src={Error404} alt="Error 404 No Find Page"/></div>
                <div className="no-match-medium">Ồ men, Xin lỗi Saitama không tìm thấy trang này!</div>
                <div className="no-match-small">Đã xảy ra sự cố hoặc trang không tồn tại nữa.</div>
                <div className="no-match-button">
                    <Link to="/" className="btn btn-radius btn-focus">
                        <i className="fa fa-chevron-circle-left mr-2"></i>Về trang chủ thôi
                    </Link>
                </div>
            </div>
        </Layout>
    )
}