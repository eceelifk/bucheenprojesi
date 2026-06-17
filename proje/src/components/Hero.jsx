

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 lg:px-24 bg-bgLight">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mt-8 md:mt-0 order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-textDark">
          Find <span className="text-brandPeach">Match Now</span> <br className="hidden md:block"/>
          and Grow Your <br className="hidden md:block"/>
          Feelings
        </h1>
        
        <p className="text-textGray leading-relaxed max-w-lg text-base md:text-lg">
          There are so many platforms from this Pokan to make a task
          manager manage all your time, the data needed is very useful.
          and we have it all to get you to be successful
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-xl mt-6 border border-gray-100">
          
          <div className="flex w-full sm:w-auto flex-1 items-center justify-between border-b sm:border-b-0 pb-4 sm:pb-0">
            <div className="flex w-1/2 items-center px-2 sm:px-4">
              <select className="bg-transparent text-textGray text-lg focus:outline-none w-full cursor-pointer appearance-none">
                <option>Male</option>
                <option>Female</option>
              </select>
              <svg className="w-5 h-5 text-gray-400 ml-1 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            
            <div className="h-8 w-px bg-gray-300 mx-2"></div>

            <div className="flex w-1/2 items-center px-2 sm:px-4">
              <select className="bg-transparent text-textGray text-lg focus:outline-none w-full cursor-pointer appearance-none">
                <option>Female</option>
                <option>Male</option>
              </select>
              <svg className="w-5 h-5 text-gray-400 ml-1 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <button className="w-full sm:w-auto px-8 py-4 bg-brandPeach text-white rounded-xl font-bold text-lg hover:bg-opacity-90 shadow-md whitespace-nowrap">
            Find Now
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-10 md:mt-0">
        <div className="relative w-full max-w-[556px] h-[400px] md:h-[600px] flex items-center justify-center">
          <img 
            src="/hero.png" 
            alt="App Mockups" 
            className="w-full h-full object-contain"
          />
        </div>   </div>  </section>  );
};

export default Hero;
