import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout/Layout";
import Animes from "../Animes/component/Animes";
import AreaLeft from "../AreaLeft/component/AreaLeft";

export default function AnimeCollections(){
    const { meta } = useParams();

    const collections = useSelector(state => state.collections.data);
    const indexes = collections.filter(x => x.key === meta);

    const animes = useSelector(state => state.animes.data);
    const animeCollects = animes.filter(x => x.collectionId === meta).sort(function(a, b){
        return b.views - a.views
    });

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return(
        <Layout 
            title={ indexes.length > 0 ? `AnimeAB - ${indexes[0].title}` : "" } 
            descript={ indexes.length > 0 ? `AnimeAB - ${indexes[0].title}` : "" }>
            <div className="main-pad">
                <div className="anis-content">
                    <div className="content">
                        <Animes animes={animeCollects} flewBig={true} title={indexes.length > 0 ? indexes[0].title : ""}></Animes>
                    </div>
                    <AreaLeft animes={animes} title="Bảng xếp hạng"></AreaLeft>
                </div>
            </div>
        </Layout>
    )
}