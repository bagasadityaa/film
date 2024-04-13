import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 sm:grid-cols-3 mx-3 m-y3">
      <Link
        href="#"
        className=" cursor-pointer transition-all text-color-primary "
      >
        <div
          className=" bg-color-secondary  
        "
        >
          <Image
            src="/posterjoker.jpg"
            className="rounded-lg"
            width="350"
            height="350"
          />
        </div>
      </Link>
      <Link
        href="#"
        className="cursor-pointer  transition-all text-color-primary "
      >
        <div
          className=" rounded-lg overflow-hidden
        "
        >
          <Image
            src="/posterjoker.jpg"
            className=" "
            width={350}
            height={350}
          />
        </div>
      </Link>
      <Link
        href="#"
        className="cursor-pointer  transition-all text-color-primary "
      >
        <div
          className=" rounded-lg overflow-hidden
        "
        >
          <Image
            src="/posterjoker.jpg"
            className=" "
            width={350}
            height={350}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
