import React from "react";

export default function ItemFilter({ ...props }){

    return (
        <div className={`filter-item ${props.dataKey}`}>
            <div className="filter-header">
                {props.title}
            </div>
            <div className="filter-content">
                {
                    props.items.map((item, i) => (
                        <div onClick={(e) => props.active(e)} data-key={item.key} key={item.key} className="f-genre-item">
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}