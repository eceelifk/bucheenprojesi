import { FaStar } from 'react-icons/fa';


const reviews = [
  {
    id: 1,
    name: "Tasha Wijayanti",
    location: "Curug",
    text: "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here"
  },
  {
    id: 2,
    name: "Sizuka engkol",
    location: "Indonesia",
    text: "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine."
  },
  {
    id: 3,
    name: "Gundam gandim",
    location: "Bulgarian",
    text: "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax"
  }
];

const CustomersHowToSay = () => {

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-24 bg-white flex flex-col items-center">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-16">
        <h2 className="text-[28px] md:text-4xl font-bold text-textDark mb-4 leading-snug md:leading-tight">
          What Our Customers <br/> Have To Say
        </h2>
        <p className="text-textGray px-4 text-[15px] md:text-base">
          Here's what our customers say with <br className="md:hidden"/> Bucheen
        </p>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 max-w-6xl w-full snap-x snap-mandatory hide-scrollbar pb-4 md:pb-8">
        {reviews.map((review) => (
          <div key={review.id} className="w-full min-w-full md:min-w-0 snap-center bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 shadow-sm flex flex-col h-full">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-400"></div>
              <div className="text-left">
                <h4 className="font-bold text-textDark text-[15px] md:text-lg">{review.name}</h4>
                <span className="text-gray-400 text-sm md:text-base font-medium">{review.location}</span>
              </div>
            </div>
            
            <p className="text-textGray text-left text-[15px] leading-relaxed flex-grow mb-6">
              {review.text}
            </p>

            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="w-4 h-4 text-[#FBBF24]" />
              ))}
            </div>
          </div>
        ))}
      </div>

  
      <div className="flex md:hidden items-center justify-center space-x-4 mt-6">
        <button className="w-11 h-11 flex items-center justify-center rounded-full border border-brandPeach text-brandPeach bg-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button className="w-11 h-11 flex items-center justify-center rounded-full bg-brandPeach text-white shadow-lg shadow-brandPeach/30 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>  </section> );
};

export default CustomersHowToSay;