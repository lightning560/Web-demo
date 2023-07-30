import React from 'react';
// This imports the functional component from the previous sample.
import Videojs from './Videojs'

interface VideoPlayerProps {
    // id?: number;
    type: string;
    url: string;
}

export default function VideoPlayer(props: VideoPlayerProps) {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: props.url,
            type: props.type,
        }]
    };

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;
        // You can handle player events here, for example:
        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('dispose', () => {
            console.log('player will dispose');
        });
    };

    return (
        <>
            <Videojs options={videoJsOptions} onReady={handlePlayerReady} />
        </>
    );
}