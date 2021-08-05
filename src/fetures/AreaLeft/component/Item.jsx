import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { updateView } from "../../../reduxs/doSomethings";

export default function Item({ ...props}){
    const loading = [1, 2, 3, 4, 5];

    return (
        <ul className="block-area-content">
            {
                (props.animes.length > 0 &&
                    props.animes.map((item, i) => (
                        <li key={`toped-${item.key}`} className={i < 3 ? "item-area top-on" : "item-area"}>
                            <div className="film-number"><span className="number">{ (i + 1) < 10 ? `0${i + 1}` : (i + 1)}</span></div>
                            <div className="film-poster">
                                <Link 
                                    onClick={() => updateView(item.key, item.linkStart)}
                                    to={`/xem-phim/${item.key}/${item.linkStart}`}>
                                        <img data-src={item.image} 
                                        className="film-poster-img ls-is-cached lazyloaded" 
                                        alt={item.title} 
                                        src={item.image} />
                                </Link>
                            </div>
                            <div className="film-detail">
                                <h3 className="film-name">
                                    <Link 
                                        onClick={() => updateView(item.key, item.linkStart)}
                                        to={`/xem-phim/${item.key}/${item.linkStart}`}
                                        title={item.title} 
                                        className="dynamic-name" 
                                        data-jname={item.key}>{item.title}</Link>
                                </h3>
                                <div className="fd-infor">
                                    <span className="fdi-item">
                                        <i className="fas fa-eye mr-2"></i>
                                        {
                                            `${props.keyword === "day" 
                                                ? item.viewDays
                                                : props.keyword === "week" 
                                                    ? item.viewWeeks
                                                    : item.viewMonths
                                            } lượt xem`
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="film-fav list-wl-item" data-id="100">
                                <i className="fa fa-plus"></i>
                            </div>
                        </li>
                    )))
                    ||  loading.map(item => (
                        <li key={item} className="item-area">
                            <div className="film-number">
                                
                            </div>
                            <div className="film-poster">
                                <Skeleton></Skeleton>
                            </div>
                            <div className="film-detail">
                                <h3><Skeleton></Skeleton></h3>
                                <div className="fd-infor">
                                    <Skeleton></Skeleton>
                                </div>
                            </div>
                        </li>
                    ))
            }
        </ul>
    )
}