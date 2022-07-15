import React from "react";
import ReactPlayer from "react-player";

export default function audioPlayer ({ scsrc }){
    return(
        <ReactPlayer
        class="video-player"
        controls="true"
        url={scsrc}
        width="100%"
        height="80%"
        />
    );
}