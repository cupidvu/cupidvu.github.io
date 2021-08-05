import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useQuery from "../../hooks/useQuery";
import Layout from "../../layouts/Layout/Layout";
import { GetAnimesFilter } from "../../reduxs/animes/apis/GetAnimes";
import Animes from "../Animes/component/Animes";
import Ranks from "../AreaLeft/component/AreaLeft";
import "./filter.css";
import ItemFilter from "./ItemFilter";
import React from "react";

export default function Filter(){

    const query = useQuery();
    const keyword = query.get("keyword");
    
    const title = keyword !== null && keyword !== "" ? "Kết quả tìm kiếm theo " + keyword : "Kết quả tìm kiếm";

    const categories = useSelector(state => state.categories.data);
    const collections = useSelector(state => state.collections.data);
    
    const animes = useSelector(state => state.animes.data);
    const animeFilters = useSelector(state => state.animesFilter.data);

    const dispatch = useDispatch();

    useEffect(function(){
        Promise.all([dispatch(GetAnimesFilter(keyword))])
    }, [dispatch, keyword]);

    const activeCategories = (e) => {
        e.preventDefault();
        const classButton = e.target.classList;

        if(classButton.contains("active")){
            classButton.remove("active");
        }
        else{
            classButton.add("active");
        }
    };

    const activeCollect = (e) => {
        e.preventDefault();
        const classButton = e.target.classList;

        if(classButton.contains("active")){
            classButton.remove("active");
        }
        else{
            classButton.add("active");
        }
    };

    const filter = () => {
        const eleCate = document.querySelectorAll(".category-filter .active");
        const eleCollect = document.querySelectorAll(".collect-filter .active");

        var arrCateFilters = [];
        var arrCollectFilters = [];

        if(eleCate.length > 0){

            eleCate.forEach((el, i) => {
                const dataKey = el.getAttribute("data-key");
                arrCateFilters.push(dataKey)
            });

        }

        if(eleCollect.length > 0){

            eleCollect.forEach((el, i) => {
                const dataKey = el.getAttribute("data-key");
                arrCollectFilters.push(dataKey)
            });

        }

        dispatch(GetAnimesFilter(keyword, arrCateFilters, arrCollectFilters));
    };

    return(
        <Layout title={`AnimeAB - Kết quả tìm kiếm`} descript="Tìm kiếm và xem anime free online trên AnimeAB">
            <div className="main-pad">
                <div className="anis-content">
                    <div className="content">   
                        <div className="filter-block">
                            <ItemFilter dataKey="category-filter" title="Thể loại" items={categories} active={activeCategories}></ItemFilter>
                            <ItemFilter dataKey="collect-filter" title="Bộ sưu tập" items={collections} active={activeCollect}></ItemFilter>
                            <div className="btn-filter">
                                <button onClick={() => filter()} type="submit">Tìm kiếm</button>
                            </div>
                        </div>
                        <div className="result-animes">
                            <Animes animes={animeFilters.length > 0 ? animeFilters : []} flewBig={true} title={title}></Animes>
                            <div className="result-total">{`${animeFilters.length} kết quả`}</div>
                        </div>
                    </div>
                    <Ranks animes={animes} title="Bảng xếp hạng"></Ranks>
                </div>
            </div>
        </Layout>
    )
}