import Image from "next/image";
import ninerlogo from '../public/pngegg.png'
function Logo(props: any) {
    const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
       <Image 
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={ninerlogo}
        alt="logo" 
        />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo