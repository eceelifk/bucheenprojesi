

const FindMatchNow = () => {
  return (
    <section className="relative w-full h-[724px] md:h-auto py-24 md:py-24 px-4 md:px-12 lg:px-24 bg-white overflow-hidden flex items-center">
      
      <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border-[1px] border-[#FDE2D9] pointer-events-none"></div>
      <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[40%] w-[450px] h-[450px] rounded-full border-[1px] border-[#FDE2D9] pointer-events-none"></div>
      <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[30%] w-[300px] h-[300px] rounded-full border-[1px] border-[#FDE2D9] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center relative z-10">
        <div className="hidden md:block md:w-1/2"></div>
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:pl-12">
          <h2 className="text-4xl md:text-5xl font-bold text-textDark leading-tight">
            Find Match Now and <br /> 
            Develop Your Feelings
          </h2>
          <p className="text-textGray leading-relaxed max-w-md">
            There are so many platforms from this Pokan to make a task
            manager manage all your time, the data needed is very useful.
            and we have it all to get you to be successful
          </p>
          <div>
            <button className="px-8 py-3 bg-[#FE7466] text-white rounded-lg font-medium hover:bg-opacity-90 shadow-sm">
              Read More
            </button>   </div> </div>  </div>  </section> );
};
export default FindMatchNow;
