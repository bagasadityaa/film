import Link from "next/link";

const Header = ({ title, linkHref, namaLink }) => {
  return (
    <div className="flex text-color-primary justify-between p-1 mx-2 my-2  items-center">
      <h1 className="lg:text-xl text-md font-bold ">{title}</h1>
      <Link href={linkHref} className="lg:text-xl text-md underline ">
        {namaLink}
      </Link>
    </div>
  );
};

export default Header;
