import "../css/featured.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import NextArror from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import { updateView } from "../../../../reduxs/doSomethings";

export default function Featured(){
    const animes = useSelector(state => state.animes.data);
    
    const data = animes.sort(function(a, b){
        return a.views - b.views
    }).slice(0, 10);

    const trendings = animes.length > 0 ? data : [];

    const settings = {
        className: "center w-100 carousel",
        infinite: true,
        lazyLoad: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        slidesToShow: 6,
        swipeToSlide: true,
        nextArrow: <NextArror />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 4
              }
            }
          ]
    }; 

    const loading = [0, 1, 2, 3, 4, 5, 6];

    return(
        <div className="film-trending">
            <div className="main-pad">
                <div className="slideout-heading">
                    <h5 className="cat-heading">Thịnh hành</h5>
                </div>
                <div className="trending-list">
                    {
                        <Slider {...settings}>
                            {
                                (trendings.length > 0 && trendings.map((item, i) => (
                                    <div key={`trending-${i}`} className="film-item">
                                        <div className="img__wrap">
                                            <div className="number">
                                                <span>{ (i + 1) < 10 ? `0${(i + 1)}` : (i + 1)}</span>
                                                <div className="film-title">{item.title}</div>
                                            </div>
                                            <Link 
                                            className="film-poster" 
                                            to={`/xem-phim/${item.key}/${item.linkStart}`}
                                            onClick={() => updateView(item.key, item.linkStart)}>
                                                <img className="film-poster-img shadow-sm"
                                                src={item.image} alt={item.title} />
                                            </Link>
                                        </div>
                                    </div>
                                )))

                                || loading.map(item => (
                                    <div className="film-item" key={item}>
                                        <Skeleton className="skeletion-item"></Skeleton>
                                    </div>
                                ))
                            }
                        </Slider>
                    }
                </div>
            </div>
        </div>
    )
}