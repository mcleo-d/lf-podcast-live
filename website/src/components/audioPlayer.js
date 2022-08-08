import React from "react";
import ReactPlayer from "react-player";

export default function AudioPlayer ({ scsrc }){
    return(
        <ReactPlayer
        playing
        controls
        className='audio-player'
        url={scsrc}
        />
    );
}