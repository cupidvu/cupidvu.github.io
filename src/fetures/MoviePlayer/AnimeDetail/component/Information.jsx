
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox";
import "@fancyapps/ui/dist/fancybox.css";
import "../css/infor.css";
import { useSelector } from "react-redux";
import formatDate from "../../../../hooks/useFormatDatetime";

function Information({ ...props }){

    const categories = useSelector(state => state.categories.data);
    var data = categories.filter(x => x.key === props.anime.categoryKey);
    var category = categories.length > 0 ? (data.length > 0 ? data[0] : {}) : {};

    const [isHidden, setHidden] = useState(true);
    
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            showClass: "fancybox-fadeIn",
            showLoading: true,
            animated: true,
            hideScrollbar: true,
            closeButton: 'inside',
          });
    });

    return(
        <React.Fragment>
            <div className="anis-infor navigation-sticky-top"
                style={{width: `${props.sizeEpisode.width}`}}>
                <div className="text-uppercase mb-3">
                    <div className="mr-3">
                        <Link className="catlist" to={`/${category.key}`}>
                            <i className="far fa-play-circle"></i>&nbsp;&nbsp;{category.title}
                        </Link>
                    </div>
                </div>
                <div className="anis-img mb-3">
                    <img src={props.anime.image} alt={props.anime.title}/>
                </div>
                <div className="anis-title">{props.anime.title}</div>
                <div className="anis-title-sub">{props.anime.titleVie}</div>
                <div className="anis-view mt-1">
                    <small>{props.anime.views} lượt xem</small>&nbsp;&nbsp;
                    <small style={{fontSize: '4px'}}><i className="fa fa-circle"></i></small>&nbsp;&nbsp;
                    <small>{formatDate(props.anime.dateRelease)}</small>
                </div>
                <div className="ml__5 mb-3">
                    <p className={`anis-descript my-3 ${isHidden ? "hidden-content" : ""}`}>
                        {props.anime.description}
                    </p>
                </div>
                <div className="ml__5 mb-3 more">
                    {
                        isHidden 
                            ?   <span onClick={() => setHidden(false)}>
                                    <small>Xem thêm&nbsp;<i className="fa fa-chevron-down"></i></small>
                                </span>
                            :   <span onClick={() => setHidden(true)}>
                                    <small>Ẩn bớt&nbsp;<i className="fa fa-chevron-up"></i></small>
                                </span>
                    }
                </div>
                <div className="anis-trainer py-3">
                     <div className="play-trainer col-md-12 mr-4">
                        <div className="row">
                            <div className="mr-3 anis-boxes bg-danger">
                                <i className="fas fa-film fa-2x"></i>
                            </div>
                            <div className="anis-boxes-action">
                                <a href="javascripts:void(0);" 
                                    data-fancybox="gallery"
                                    data-src={props.anime.trainer}
                                    >Xem Trainer</a>
                            </div>
                        </div>
                    </div>
                        {/* <div className="actions col-md-5">
                            <div className="row">
                                <div className="mr-3 anis-boxes bg-hear">
                                    <i className="fas fa-heart fa-2x"></i>
                                </div>
                                <div className="anis-boxes-action">
                                    <Link to="/">Theo dõi</Link>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Information)