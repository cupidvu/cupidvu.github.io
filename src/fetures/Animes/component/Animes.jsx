import "../css/animes.css";
import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { updateView } from "../../../reduxs/doSomethings";

export default function Animes({ ...props }){
    const loading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const loadingBig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <div className="animes">
            <div className="slideout-heading">
                <h5 className="cat-heading">{props.title}</h5>
            </div>
            <div className="tab-content">
                <div className="anis-list">
                    <div className="film_list-wrap">
                        {
                            (props.animes.length > 0 &&
                            props.animes.map((item, i) => (
                                <div key={item.key} 
                                className={props.flewBig && i < 4 ? "flw-item flw-item-big" : "flw-item"}>
                                    <div className="film-poster">
                                        <div className="tick ltr">
                                            <div className="tick-item tick-dub">SUB</div>
                                            <div className="tick-item tick-dub">HD</div>
                                        </div>
                                        <div className="tick rtl">
                                            <div className="tick-item tick-eps">
                                                {`${item.episodeMoment}/${item.episode}`}
                                            </div>
                                        </div>
                                        <img data-src={item.image} 
                                            className="film-poster-img lazyloaded" 
                                            alt={item.title}
                                            src={item.image} />
                                        {
                                            item.isStatus < 2 
                                                ? ""
                                                :   <Link
                                                        onClick={() => updateView(item.key, item.isStatus < 3 ? item.linkEnd : item.linkStart)}
                                                        to={`/xem-phim/${item.key}/${item.isStatus < 3 ? item.linkEnd : item.linkStart}`}  
                                                        className="film-poster-ahref" 
                                                        title={item.title}>
                                                        <i className="fas fa-play"></i>
                                                    </Link>
                                        }
                                    </div>
                                    <div className="film-detail">
                                        <h3 className="film-name">
                                            <Link 
                                                onClick={() => updateView(item.key, item.isStatus < 3 ? item.linkEnd : item.linkStart)}
                                                to={`/xem-phim/${item.key}/${item.isStatus < 3 ? item.linkEnd : item.linkStart}`}  
                                                title={item.title} 
                                                className="dynamic-name">
                                                {item.title}
                                            </Link>
                                        </h3>
                                        {
                                            props.flewBig && i < 4 
                                            ? <div className="description">
                                                {item.description}
                                                </div>
                                            :""
                                        }
                                        <div className="fd-infor">
                                            <span className="fdi-item">TV</span>
                                            <span className="dot"></span>
                                            <span className="fdi-item fdi-duration">
                                                {
                                                    item.movieDuration > 60 
                                                        ? `${item.movieDuration / 60}h${item.movieDuration % 60}m` 
                                                        : `${item.movieDuration}m`
                                                }
                                            </span>
                                        </div>
                                    </div>
                                        { 
                                            item.isStatus < 2 
                                                ? <div className="clear-fix"><span>Sắp công chiếu</span></div> 
                                                : "" 
                                        }
                                </div>
                            )))
                            ||  (
                                props.flewBig ? loadingBig.map(item => (
                                    <div key={item} className={props.flewBig && item < 5 ? "flw-item flw-item-big" : "flw-item"}>
                                        <Skeleton></Skeleton>
                                    </div>
                                ))
                                : loading.map(item => (
                                    <div key={item} className={props.flewBig && item < 5 ? "flw-item flw-item-big" : "flw-item"}>
                                        <Skeleton></Skeleton>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}