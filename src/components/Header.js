import Link from "next/link"

const Header = ({title, linkHref, namaLink}) =>{
    return(
        <div className="flex justify-between p-4 items-center">
            <h1 className="text-2xl p-4 font-bold text-color-primary">{title}</h1>
            <Link href={linkHref} className=" text-md underline ">{namaLink}</Link>
        </div>
    )
}

export default Header;