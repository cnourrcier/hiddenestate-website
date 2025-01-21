import React, { useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
  const videoId = import.meta.env.VITE_CLOUDFLARE_STREAM_VIDEO_ID;
  const customerSubdomain = import.meta.env.VITE_CLOUDFLARE_STREAM_CUSTOMER_SUBDOMAIN;
  const videoSrc = `https://${customerSubdomain}/${videoId}/manifest/video.m3u8`;

  useEffect(() => {
    const video = document.getElementById('video-player');
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      console.log(hls);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari, iOS)
      video.src = videoSrc;
    }
  }, [videoSrc]);

  return (
    // <div
    //   style={{
    //     position: 'relative',
    //     width: '100vw',
    //     height: '100vh',
    //     overflow: 'hidden',
    //   }}
    // >
      <video
        id="video-player"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        playsInline
        autoPlay
        muted
        // controls
      ></video>
    // </div>
  );
};

export default VideoPlayer;
