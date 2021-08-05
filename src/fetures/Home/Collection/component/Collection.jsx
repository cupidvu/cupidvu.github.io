import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

export default function Collection() {
    const collections = useSelector(state => state.collections.data);
    const loading = [1, 2, 3, 4];

    return(
        <div className="collection">
            <div className="slideout-heading">
                <div className="d-inlinee-block">
                    <h5 className="cat-heading">Bộ sưu tập</h5>
                </div>
            </div>
            <div className="collection-list">
                <div className="center carousel movies d-flex">
                    {
                        (collections.length > 0 && collections.map((item, i) => (
                            <div key={ `collect-${i}` } className="collection-item">
                                <div className="position-relative d-block">
                                    <Link to={`/bo-suu-tap/${item.key}`}>
                                        <img src={item.image}
                                            className="img-fluid shadow-sm" alt={item.title} />
                                    </Link>
                                </div>
                            </div>
                        )))
                        || loading.map(item => (
                            <div key={ `collect-${item}` } className="collection-item">
                                <Skeleton className="skeletion-item"></Skeleton>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}