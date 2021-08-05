import NextArrow from "../component/NextArrow";
import PrevArrow from "../component/PrevArrow";
import "../css/slider.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../../../../hooks/useFormatDatetime.js";
import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { updateView } from "../../../../reduxs/doSomethings";

export default function SliderMovie(){
    const animes = useSelector(state => state.animes.data);
    const data = animes.filter(x => x.isBanner === true);
    const sliders = animes.length > 0 ? (data.length > 0 ? data : []) : [];

    const settings = {
        dot: true,
        className: "center carousel",
        infinite: true,
        lazyLoad: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        slidesToShow: 1,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }; 

    return(
        <div className="deslide-wrap">
            <div id="slider">
                {
                  (sliders.length > 0 && <Slider {...settings}>
                    {
                        sliders.map((item, i) => (
                            <div key={`slide-${item.key}`} className="deslide-item">
                                <div className="deslide-cover">
                                    <div className="deslide-cover-img">
                                        <img className="film-poster-img lazyloaded" 
                                            data-src={item.banner} 
                                            alt={item.title}
                                            src={item.banner} />
                                    </div>
                                </div>
                                <div className="deslide-item-content">
                                    <div className="desi-sub-text">{`#${i + 1} Spotlight`}</div>
                                    <div className="desi-head-title dynamic-name" data-jname={item.title}>
                                        {item.title}
                                    </div>
                                    <div className="sc-detail">
                                        <div className="scd-item">
                                            <i className="fas fa-play-circle mr-1"></i>TV
                                        </div>
                                        <div className="scd-item">
                                            <i className="fas fa-clock mr-1"></i>
                                            {
                                                item.movieDuration > 60 
                                                    ? `${item.movieDuration / 60}h${item.movieDuration % 60}m` 
                                                    : `${item.movieDuration}m`
                                            }
                                        </div>
                                        <div className="scd-item m-hide">
                                            <i className="fas fa-calendar mr-1"></i>{formatDate(item.dateRelease)}
                                        </div>
                                        <div className="scd-item mr-1">
                                            <span className="quality">HD</span>
                                        </div>   
                                        <div className="scd-item mr-1">
                                            <span className="quality bg-white">SUB</span>
                                        </div>
                                    </div>
                                    <div className="desi-description">
                                        {item.description}
                                    </div>
                                    <div className="desi-buttons">
                                        <Link 
                                            onClick={() => updateView(item.key, item.linkStart)}
                                            to={`/xem-phim/${item.key}/${item.linkStart}`}
                                            className="btn btn-primary btn-radius mr-2">
                                            <i className="fas fa-play-circle mr-2"></i>Xem phim
                                        </Link>
                                        {/* <Link to={`/${item.}`} className="btn btn-secondary btn-radius">Detail<i className="fas fa-angle-right ml-2"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        ))
                        
                    }
                </Slider>)
                ||  <SkeletonTheme color="#202125" highlightColor="#202125">
                        <Skeleton />
                    </SkeletonTheme>
                }
            </div>
        </div>
    )
}