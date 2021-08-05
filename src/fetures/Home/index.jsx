import React from "react";
import Layout from "../../layouts/Layout/Layout";
import Trendings from "./Trending/component/Trending";
import Ranks from "../AreaLeft/component/AreaLeft";
import Collection from "./Collection/component/Collection";
import SliderMovie from "./Slider/component/Slider";
import Animes from "../Animes/component/Animes";
import "./home.css";
import { useSelector } from "react-redux";

export default function Home(){

    const animes = useSelector(state => state.animes.data);
    
    const dataNews = animes.filter(x => x.isStatus < 3);
    const animeNews = animes.length > 0 ? dataNews.slice(0, 18) : [];

    const dataCompleted = animes.filter(x => x.isStatus === 3);
    const animeCompleted = animes.length > 0 ? dataCompleted : [];
    
    return(
        <Layout title={`AnimeAB Vietsub Online Free HD Trang chủ`} descript="Xem phim anime online free trên AnimeAB">
            <SliderMovie></SliderMovie>
            <Trendings></Trendings>
            <div className="main-wrapper">
                <div className="main-pad">
                    <div className="main-content">
                        <div className="content">
                            <Collection></Collection>
                            <Animes animes={animeNews} title="Anime mới nhất"></Animes>
                            <Animes animes={animeCompleted} title="Tất cả anime"></Animes>
                        </div>
                        <Ranks title="Bảng xếp hạng" animes={animes}></Ranks>
                    </div>
                </div>
            </div>
        </Layout>
    )
}