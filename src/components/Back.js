import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";

export const Back = () => {
  return (
    <>
      <div>
        <Link
          href="/"
          className="flex   items-center outline outline-color-primary rounded-full "
        >
          <CaretLeft className="w-6 h-6 lg:w-10 lg:h-10" color="#ffff" />
        </Link>
      </div>
    </>
  );
};
