import React from "react";
import ReactPlayer from "react-player";

export default function AudioPlayer ({ scsrc }){
    return(
        <ReactPlayer
        playing
        controls
        className='react-player'
        url={scsrc}
        />
    );
}