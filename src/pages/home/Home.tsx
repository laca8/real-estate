

const Home = () => {
  return (
    <div
      className={`justify-center  object-none  bg-no-repeat bg-cover bg-center rounded-lg h-[94vh] border-2 `}

      style={{ backgroundImage: `url(https://www.racrealestate.com/assets/Building.webp)` }}>
      <div className="bg-[rgb(0,0,0,0.6)] h-full flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-6xl text-white  font-bold animate-fadeInDown animation-duration-100 animation-delay-200">Welcome to Real Estate</h1>
        <p className="text-white w-1/3 text-center text-xl animate-fadeInDown animation-duration-100 animation-delay-100">
          Discover the perfect living space with our extensive collection of premium apartments. From cozy studios to luxurious penthouses, we have your ideal home waiting.
        </p>
        <div className="animate-fadeInDown font-semibold animation-duration-100 animation-delay-50">
          <button className="bg-white text-black px-4 py-3 rounded-lg mr-4   hover:bg-gray-400">
            Get Started
          </button>
          <button className="border-2 border-black text-white px-4 py-3 rounded-lg  hover:bg-black">
            Learn More
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home