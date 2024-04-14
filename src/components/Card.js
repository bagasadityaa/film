import Image from "next/image";
import Link from "next/link";

const Card = ({ movieLink, movieImages, movieAlt, movieTitle }) => {
  return (
    <Link
      href={`/movie/${movieLink}`}
      className=" cursor-pointer transition-all text-color-primary "
    >
      <Image
        src={movieImages}
        className="rounded-lg"
        width="350"
        height="350"
        alt={movieAlt}
      />

      <h3 className="font-bold text-md md:text-xl">{movieTitle}</h3>
    </Link>
  );
};

export default Card;
