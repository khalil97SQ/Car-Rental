import React, { useState } from "react";
import videoImg from "../assets/video-img.jpg";
import { Play, X } from "lucide-react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="px-4 sm:py-20 py-16 flex  justify-center items-center bg-white">
      <div className="relative w-full max-w-7xl head-reveal">
        {/* Image Container */}
        <img
          src={videoImg}
          alt="BMW Cars"
          className="w-full sm:h-[450px] h-[300px] rounded-xl object-cover shadow-lg"
        />

        {/* Play Button */}
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          onClick={() => {
            setShowVideo(true);
          }}
        >
          <span className="relative flex justify-center items-center w-20 h-20 rounded-full bg-white bg-opacity-70 shadow-xl">
            <span className="absolute w-28 h-28 bg-white opacity-50 rounded-full -z-10 animate-ping ease-linear"></span>
            <span className="absolute w-32 h-32 bg-white opacity-50 rounded-full -z-10 delay-100 animate-ping ease-linear"></span>
            <Play className="text-red-500 w-8 h-8" />
          </span>
        </button>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-10 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-3xl">
              <button
                className="absolute top-2 right-2 text-white text-2xl transition hover:text-red-500"
                onClick={() => setShowVideo(false)}
              >
                <X className="cursor-pointer" />
              </button>
              <div className="aspect-w-16 aspect-h-9 h-[400px] w-full">
                {/* iframe => "Video Link" */}
                <iframe
                  src="https://www.youtube.com/embed/b_8fHNIHFk4?si=WcC1fUCGv4tWAKWD"
                  title="YouTube video player"
                  frameborder="0"
                  allow=""
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
