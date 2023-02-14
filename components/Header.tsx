import Link from "next/link"
import Image from "next/image"
import ninerlogo from '../public/pngegg.png'
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

function Header() {
  return (
    <header className="flex items-center sm:justify-between justify-end space-x-2 font-bold px-10 py-5">
        <div className="hidden sm:flex items-center space-x-2 ">
            <Link href='/'>
                <Image
                src={ninerlogo}
                width={50}
                height={50}
                alt='logo' />
            </Link>
            <h1>49ver Faithful</h1>
        </div>

        <div>
            <div className=" flex   sm:items-center px-5 py-3 bg-[#AA0000]  rounded-full text-center space-x-3">
                
                <p className="text-[#B3995D]">Follow us!</p>
                
                <Link 
                href='https://twitter.com/49verfaithful' 
                className="text-md md:text-base  text-[#000000] " >
                    <AiFillTwitterCircle className="text-3xl"  color="#ffffff"/>
                </Link>
                
                <Link
                href='https://instagram.com/49verfaithful'
                className="text-md md:text-base  text-[#000000]" >
                    <AiFillInstagram className="text-3xl" color="#ffffff" />
                </Link>

                <Link
                href='https://youtube.com/49verfaithful'
                className="text-md md:text-base  text-[#000000]" >
                    <AiFillYoutube className="text-3xl" color="#ffffff" />
                </Link>
        
            </div>
        </div>
    </header>
  )
}

export default Header