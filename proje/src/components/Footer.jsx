

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFF1EF] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
        
        <div className="w-full md:w-1/3 flex flex-col space-y-4 md:pr-8">
          <div className="text-3xl font-extrabold tracking-tight">
            <span className="text-brandPurple">Bu</span>
            <span className="text-brandPeach">cheen</span>
          </div>
          <p className="text-textGray text-base leading-relaxed md:max-w-xs"> The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy  </p>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8">
          
          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-brandPeach">About Us</h5>
            <a href="#" className="text-textGray text-sm hover:text-brandPeach transition-colors">Our people</a>
            <a href="#" className="text-textGray text-sm hover:text-brandPeach transition-colors">Our categories</a>
            <a href="#" className="text-textGray text-sm hover:text-brandPeach transition-colors">Contact us</a>
            <a href="#" className="text-textGray text-sm hover:text-brandPeach transition-colors">Testimonial</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="font-bold text-brandPeach">Product</h5>
            <a href="#" className="text-textGray text-sm hover:text-brandPeach transition-colors">Task Mangement</a>
            <a href="#" className="text-textGray text-sm hover:text-brandPeach transition-colors">Service</a>
            <a href="#" className="text-textGray text-sm hover:text-brandPeach transition-colors">Task Schedule</a>
          </div>

          <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
            <h5 className="font-bold text-brandPeach">Contact us</h5>
            <div className="flex items-center space-x-3 text-textGray text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>(021) 3258 4930</span>
            </div>
            <div className="flex items-center space-x-3 text-textGray text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>Pokan@Hola.com</span>
            </div>
            <div className="flex items-start space-x-3 text-textGray text-sm">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Sukabumi, Jawa Barat<br/>Indonesia, IDN</span>
            </div>
          </div>    </div>   </div>  </footer>  );
};

export default Footer;