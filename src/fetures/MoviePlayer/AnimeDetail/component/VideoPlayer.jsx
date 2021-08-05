import React from "react";
import "../css/movie.css";

export default function VideoPlayer({ size, episodeItem }){

    const iframe = `<iframe mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" src="${episodeItem.link}"></iframe>`
    return(
        <div className="anis-iframe" style={{height: `${size.height}`}}>
            <div className="player-movie" dangerouslySetInnerHTML={{__html: iframe}}></div>
        </div>
    )
}

  