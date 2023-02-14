

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">49ver Faithful</h1> 
            <h2 className="mt-5 md:mt-0 flex">
                A blog for the faithhful, by the faithful.
            </h2>   
        </div>

        <p className="mt-5 md:mt-2 text-gray-600 max-w-sm hidden lg:flex ">
            49er News | Latest Stories | Rumors
        </p>
    </div>
  )
}

export default Banner