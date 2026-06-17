import { useState, useRef } from 'react';

const profiles = [
  {
    id: 1,
    name: "Javar Saripun",
    description: "A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.",
    bgColor: "bg-red-100",
    image: "/javar.png"
  },
  {
    id: 2,
    name: "Fausiah Fera",
    description: "Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.",
    bgColor: "bg-purple-200",
    image: "/fausiah.png"
  },
  {
    id: 3,
    name: "Shreryl Olap",
    description: "Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.",
    bgColor: "bg-orange-100",
    image: "/shreryl.png"
  }
];

const TrendingProfiles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const scrollWidth = e.target.scrollWidth - e.target.clientWidth;
    if (scrollWidth <= 0) return;
    
    const newIndex = Math.round((scrollPosition / scrollWidth) * (profiles.length - 1));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-12 lg:px-24 bg-bgLight flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center">
        
        {/*baslık kısmı */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            Most Popular In This Week
          </h2>
          <p className="text-textGray leading-relaxed">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
          </p>
        </div>

        {/* kartlar,yatay kaydırması ve ızgara versiyonu -burada ve alttaki kısımda yapay zekadan yardım aldım - */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto md:overflow-x-visible md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full pt-10 pb-20 snap-x snap-mandatory hide-scrollbar px-4 md:px-0"
        >
          {profiles.map((profile, index) => (
            <div 
              key={profile.id} 
              style={{ 
                maxWidth: index === 0 ? '331px' : '328px',
                height: index === 0 ? '486px' : '521px'
              }}
              className={`w-full mx-auto flex-shrink-0 snap-center rounded-[21px] border-[0.87px] border-gray-100 bg-white shadow-xl overflow-hidden flex flex-col transition-transform duration-300
                ${index === 0 ? '' : ''} 
                ${index === 1 ? 'md:translate-y-12' : ''} 
                ${index === 2 ? 'md:translate-y-24' : ''}`}
            >
            <div className={`w-full h-[45%] overflow-hidden ${profile.bgColor}`}>
              <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col items-start text-left flex-grow">
              <h3 className="text-2xl font-bold text-textDark mb-3">{profile.name}</h3>
              <p className="text-textGray text-sm leading-relaxed">{profile.description}</p>
            </div>
          </div>
        ))}
        </div>

        {/* Mobil slider kısmı */}
        <div className="flex md:hidden justify-center items-center space-x-3 mt-4">
          {profiles.map((_, i) => (
            <div 
              key={i} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-[#F53C42]' : 'bg-[#F53C42] opacity-30'
              }`}
            ></div>
          ))}
        </div>  </div> </section>  );
};

export default TrendingProfiles;
