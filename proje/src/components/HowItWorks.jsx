
const steps = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6 text-brandPeach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    ),
    text: "Find your dating relationship in app and waiting until you get a notification. have a good relationship its started"
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6 text-brandPeach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner"
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6 text-brandPeach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    ),
    text: "Ideal relationship makes your online dating relationship run more smoothly using this app"
  }
];

const HowItWorks = () => {

  return (
    <section className="w-full h-[758px] md:h-auto py-20 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-textDark max-w-lg">
            How It Works To Find Your Relationship
          </h2>
        </div>

        <div className="flex flex-col space-y-10 max-w-lg">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start space-x-6">
              {/* ikonların bg si */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FDE2D9] flex items-center justify-center">
                {step.icon}
              </div>
        
              <p className="text-textGray leading-relaxed mt-2 text-base md:text-lg">
                {step.text}
              </p>
            </div>
          ))}
        </div>   </div>   </section>  );
};

export default HowItWorks;