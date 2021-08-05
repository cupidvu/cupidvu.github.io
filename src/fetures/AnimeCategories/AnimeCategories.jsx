import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout/Layout";
import Animes from "../Animes/component/Animes";
import AreaLeft from "../AreaLeft/component/AreaLeft";

export default function Categories(){
    const { meta } = useParams();

    const categories = useSelector(state => state.categories.data);
    const indexes = categories.filter(x => x.key === meta);

    const animes = useSelector(state => state.animes.data);
    const animeCates = animes.filter(x => x.categoryKey === meta).sort(function(a, b){
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
                        <Animes animes={animeCates} flewBig={true} title={indexes.length > 0 ? indexes[0].title : ""}></Animes>
                    </div>
                    <AreaLeft animes={animes} title="Bảng xếp hạng"></AreaLeft>
                </div>
            </div>
        </Layout>
    )
}