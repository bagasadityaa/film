import { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

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

    // Auto play video when component mounts
    const timeout = setTimeout(() => {
      const videoElement = videoRef.current;

      videoElement.play();
      setIsPlaying(true);
      setShowPoster(false);
    }, 3000); // Delay 3 detik sebelum otomatis memutar video

    videoElement.addEventListener("ended", handleVideoEnded);

    return () => {
      clearTimeout(timeout);
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, []);
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
      <div className="absolute w-full transform ">
        {/* Video */}
        {showPoster && (
          <img
            src="cover.svg" // Ganti dengan URL poster Anda
            alt="Video Poster"
            className="w-full h-full block"
            onClick={() => {
              videoRef.current.play();
              setIsPlaying(true);
              setShowPoster(false);
            }}
          />
        )}
        <video
          ref={videoRef}
          src={src}
          controls={false}
          autoPlay // Mulai video secara otomatis
          onClick={togglePlay}
          className={`w-full h-full ${showPoster ? "hidden" : "block"}`}
        ></video>

        <div className="justify-start lg:block md:block hidden md:absolute lg:absolute left-14 top-1/2 lg:w-96 sm:mx-2">
          <div className=" text-color-primary ">
            <h1 className="lg:text-3xl md:text-lg my-1 text-start font-bold">
              500 Days of Summer
            </h1>
            <h3 className="lg:text-lg my-1 md:text-base text-start">
              Romance | 2009 | 2j 4m
            </h3>
            <p className="lg:text-xl my-1 text-start md:text-lg ">
              500 Days of Summer adalah film drama komedi romantis Amerika
              Serikat tahun 2009
            </p>
            {/* <button>
              <h1 className="text-2xl font-bold bg-opacity-50 bg-color-secondary pr-44">
                Tonton Sekarang
              </h1>
            </button> */}
          </div>
        </div>

        {/* Tombol Play/Pause */}
        {/* <button
          onClick={togglePlay}
          className="bg-transparent border border-white px-4 py-2 rounded-md text-white"
        >
          {isPlaying ? "Pause" : "Play"}
        </button> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
