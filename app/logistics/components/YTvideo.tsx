"use client";

import { useEffect, useRef } from "react";

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const playerRef = useRef<any>(null);
  const playerContainerId = `youtube-player-${videoId}`;

  useEffect(() => {
    // bail out during SSR
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const loadYouTubeAPI = () => {
      return new Promise<void>((resolve, reject) => {
        if ((window as any).YT && typeof (window as any).YT.Player === "function") {
          resolve();
          return;
        }

        (window as any).onYouTubeIframeAPIReady = () => {
          if ((window as any).YT && typeof (window as any).YT.Player === "function") {
            resolve();
          }
        };

        if (!document.getElementById("youtube-iframe-api")) {
          const script = document.createElement("script");
          script.id = "youtube-iframe-api";
          script.src = "https://www.youtube.com/iframe_api";
          script.async = true;
          script.onerror = () => reject(new Error("Failed to load YouTube Iframe API"));
          document.head.appendChild(script);
        }
      });
    };

    const initializePlayer = () => {
      if (playerRef.current) return;

      playerRef.current = new (window as any).YT.Player(playerContainerId, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          modestbranding: 1,
          disablekb: 1,
          fs: 0,
          rel: 0,
          loop: 1,
          playlist: videoId,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          },
        },
      });
    };

    loadYouTubeAPI()
      .then(initializePlayer)
      .catch((error) => console.error("YouTube API script loading error:", error));

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId, playerContainerId]);

  return <div id={playerContainerId} className="w-full h-full youtube-player" />;
};

export default YouTubePlayer;
