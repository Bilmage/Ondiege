"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export interface VideoJsSource {
  src: string;
  type: string;
}

export interface VideoJsPlayerOptions {
  autoplay?: boolean | string;
  controls?: boolean;
  responsive?: boolean;
  fluid?: boolean;
  poster?: string;
  sources?: VideoJsSource[];
  playbackRates?: number[];
  loop?: boolean;
  muted?: boolean;
}

export interface VideoJsPlayerInstance {
  autoplay: (value?: boolean | string) => boolean | string | void;
  src: (source?: VideoJsSource | VideoJsSource[] | string) => void;
  poster: (source?: string) => string | void;
  dispose: () => void;
  isDisposed: () => boolean;
}

export interface VideoJsPlayerProps {
  options: VideoJsPlayerOptions;
  onReady?: (player: VideoJsPlayerInstance) => void;
  className?: string;
}

export function VideoJsPlayer({ options, onReady, className = "" }: VideoJsPlayerProps) {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayerInstance | null>(null);

  useEffect(() => {
    // Initialize Video.js player only once
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered", "retro-vjs-theme");
      videoRef.current.appendChild(videoElement);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const playerInstance = (videojs as any)(videoElement, options, () => {
        if (onReady) {
          onReady(playerInstance as VideoJsPlayerInstance);
        }
      });
      playerRef.current = playerInstance as VideoJsPlayerInstance;
    } else if (playerRef.current) {
      const player = playerRef.current;
      if (options.autoplay !== undefined) {
        player.autoplay(options.autoplay);
      }
      if (options.sources) {
        player.src(options.sources);
      }
      if (options.poster) {
        player.poster(options.poster);
      }
    }
  }, [options, onReady]);

  // Clean up player on unmount
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className={`relative w-full ${className}`}>
      <div ref={videoRef} className="w-full aspect-video" />
    </div>
  );
}
