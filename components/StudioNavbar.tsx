import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link 
                className="text-[#B3995D] flex items-center" 
                href="/" 
            > 
            <ArrowUturnLeftIcon className="h-5 w-5 text-[#AA0000] mr-2" />
            Go to the Blog
            </Link>
        </div>
    <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
