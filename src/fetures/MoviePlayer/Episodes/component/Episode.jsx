
import React from "react";
import Slider from "react-slick";
import NextArror from "./NextArrow";
import PrevArrow from "./PrevArrow";
import "../css/episode.css";
import { Link } from "react-router-dom";
import { UpdateViewAnimeDetail } from "../../../../reduxs/animes/apis/GetAnimes";
import { useDispatch } from "react-redux";

export default function Episode({ ...props }){
    const episodesCount = props.episodes.length;
    const dispatch = useDispatch();

    const settings = {
        className: "center carousel",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <NextArror />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
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
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    }; 

    const updateView = (animeDetailKey) => {
        dispatch(UpdateViewAnimeDetail(props.animeKey, animeDetailKey));
    };

    const indexes = function(){
        var array = [];

        props.episodes.map((item, i) => (
          array.push(
            <div key={item.key} className="episode-item">
              <div className={`position-relative d-block ${props.meta === item.key ? "active-anis" : ""}`}>

                  <Link onClick={() => updateView(item.key)}
                     to={`/xem-phim/${props.animeKey}/${item.key}`} 
                     className="imageouta">

                      <img src={item.image}
                          className="img-fluid shadow-sm w-100"
                          alt={item.title} />
                  </Link>
              </div>
              <div className="p-2 my-md-2">
                  <h6>{item.title}</h6>
                  <small>{item.views} lượt xem</small>
              </div>
          </div>)
      ));

      return array;
    };

    return (
        <div className="episode">
           <div className="main-pad">
           <div className="slideout-heading">  
                <div className="episode__title"><h5 className="cat-heading">Danh sách tập</h5></div>
                <div className="episode__list"><span>Tập 1 - Tập {episodesCount}</span></div>		
            </div>
            <div className="episode-list-item">
                {
                  episodesCount > 5 
                    ?<Slider {...settings}>
                        {
                          indexes()
                        }    
                    </Slider>
                    : <div className="d-flex min-episodes">
                        {indexes()}
                      </div>
                }
            </div>
           </div>
        </div>
    )
}