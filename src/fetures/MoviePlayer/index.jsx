
import React, { useEffect } from "react";
import Layout from "../../layouts/Layout/Layout";
import AnimeVideo from "./AnimeDetail/component/VideoPlayer";
import AnimeInfor from "./AnimeDetail/component/Information";
import Episodes from "./Episodes/component/Episode";
import { useOptionSize } from "./hook/useOptionSize";
import Animes from "../Animes/component/Animes";
import RelatedAnime from "../AreaLeft/component/AreaLeft";
import "./style.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animeDetails } from "../../reduxs/doSomethings";

export default function ViewMovie(){

    const { meta, episode } = useParams();

    const dispatch = useDispatch();
    //Anime detail video
    const animes = useSelector(state => state.animes.data);
    const index = animes.length > 0 ? (animes.filter(x => x.key === meta))[0] : {};
    //List episode
    const episodesArray = useSelector(state => state.animeDetails.data);
    const dataEpisode = episodesArray.filter(x => x.key === episode);
    const episodeItem = episodesArray.length > 0 ? (dataEpisode.length > 0 ? dataEpisode[0] : {}) : {};

    const animeRelates = animes.length > 0 ? animes.filter(x => x.categoryKey === index.categoryKey && x.key !== meta) : [];
    const animeOffer = animes.length > 0 ? animes.filter(x => x.key !== meta) : [];
    //Set size
    const {size, sizeEpisode} = useOptionSize();

    useEffect(() => {
       dispatch(animeDetails(meta))
    }, [dispatch, meta]) 

    return(
        <Layout 
            title={ Object.keys(episodeItem).length > 0 ? `${index.title} ${episodeItem.title}` : "" } 
            descript={ Object.keys(episodeItem).length > 0 ? `AnimeAB - ${index.title} ${episodeItem.title}` : "" }>       

            <div id="anis-detail" className="anis-detail col-12">
                <div className="anis">
                    <div className="anis-cover-wrap">
                        <div className="anis-cover" 
                        style={{backgroundImage: `url(${index.image})`}}> 
                        </div>
                    </div>
                    <div className="anis-video" style={{width: `${size.width}`}}>
                        <AnimeVideo episodeItem={episodeItem} size={size}></AnimeVideo>
                        <Episodes meta={episode} animeKey={index.key} episodes={episodesArray}></Episodes>
                    </div>
                    <AnimeInfor anime={index} sizeEpisode={sizeEpisode}></AnimeInfor>
                </div>
            </div>
            <div className="main-pad">
                <div className="main-anis">
                    <div className="content">
                        <Animes animes={animeOffer} title="Animes đề xuất"></Animes>
                    </div>
                    <RelatedAnime title="Anime liên quan" animes={animeRelates}></RelatedAnime>
                </div>
            </div>
        </Layout>
    )
}