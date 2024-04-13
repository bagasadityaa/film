import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [mute, setMute] = useState(false);
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnded = () => {
      setIsPlaying(false);
      setShowPoster(true);
    };

    // const playVideo = () => {
    //   videoElement.play();
    //   setIsPlaying(true);
    //   setShowPoster(false);
    // };

    const timeout = setTimeout(() => {
      const videoElement = videoRef.current;
      videoElement.play();
      setIsPlaying(true);
      setShowPoster(false);
    }, 3000);

    videoElement.addEventListener("ended", handleVideoEnded);

    return () => {
      clearTimeout(timeout);
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, []);
  const toggleMute = () => {
    setMute(!mute);
    videoRef.current.muted = !videoRef.current.muted;
  };
  const togglePlay = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
      setShowPoster(false);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="w-full flex lg:items-center lg:min-h-screen lg:justify-center">
      <div className="relative w-full transform">
        {showPoster && (
          <div className="relative max-h-screen ">
            <img
              src={poster}
              alt="Video Poster"
              className="w-full lg:h-screen items-center flex"
              onClick={() => {
                videoRef.current.play();
                setIsPlaying(true);
                setShowPoster(false);
              }}
            />
          </div>
        )}
        <div className="overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            loop
            // onClick={togglePlay}
            className={`w-full ${showPoster ? "hidden" : "block"}`}
          ></video>
        </div>

        <div className="lg:justify-start lg:w-96 md:w-full w-full lg:left-14 md:left-14  md:mt-3 lg:absolute top-1/2 text-center">
          <div className="text-color-primary">
            <h1 className="lg:text-3xl md:text-lg my-1 lg:text-start md:text-center  font-bold">
              Joker: Folie à Deux
            </h1>
            <h3 className="lg:text-xl my-1 lg:text-start text-base">
              Thriller | 2024 | 2j 4m
            </h3>
            <p className="lg:text-xl my-1 text-start md:text-lg hidden  sm:block">
              Joker: Folie à Deux merupakan kelanjutan dari film Joker (2019)
              yang mengisahkan awal mula Arthur Fleck bertransformasi menjadi
              psikopat.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            {isPlaying && (
              <button
                className="bg-white px-4 md:justify-center py-2 justify-start flex rounded-full border border-color-primary"
                onClick={toggleMute}
              >
                {mute ? (
                  <Image src="unmute.svg" width={16} height={16} />
                ) : (
                  <Image src="mute.svg" width={16} height={16} />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
