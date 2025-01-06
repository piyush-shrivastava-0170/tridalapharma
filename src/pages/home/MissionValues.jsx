import affordabilityIcon from './../../assets/icons/affordability.png';
import qualityIcon from './../../assets/icons/quality.png';
import rangeIcon from './../../assets/icons/range.png';
import supplyChainIcon from './../../assets/icons/supplyChain.png';

const MissionValues = () => {
  const values = [
    {
      icon: affordabilityIcon,
      title: 'Affordability',
      description: "Quality doesn't have to cost an arm and a leg. We offer competitive prices without compromising on quality."
    },
    {
      icon: qualityIcon,
      title: 'Quality',
      description: "We don't cut corners. Ever. Our products undergo stringent testing to ensure safety and efficacy."
    },
  ];
  const values2 = [
    {
      icon: rangeIcon,
      title: 'Range',
      description: "Whatever you need, we've probably got it. From pain management to vitamins, we have solutions for all your healthcare needs."
    },
    {
      icon: supplyChainIcon,
      title: 'Supply Chain',
      description: "We've got your back, and your meds, when you need them. Our efficient sourcing and distribution processes ensure timely delivery."
    }]

  return (
    <div className="py-20 px-8 bg-[#79B3AF]">
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center text-white  mb-12">Our Mission and Values</h2>
      <div className='md:hidden flex flex-col items-center justify-center space-y-4 my-4'>
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-4 md:p-8 flex flex-col items-center text-center md:space-y-4 w-64">
            <img src={value.icon} alt={value.title} className="h-8 w-8" />
            <h3 className="text-xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className='md:hidden flex flex-col items-center justify-center space-y-4 my-4'>
        {values2.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-4 md:p-8 flex flex-col items-center text-center md:space-y-4 w-64">
            <img src={value.icon} alt={value.title} className="h-8 w-8" />
            <h3 className="text-xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-around md:m-5">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-8 xl:p-16 flex flex-col items-center text-center md:space-y-4 w-64 h-64 xl:w-[400px] xl:h-[400px]">
            <img src={value.icon} alt={value.title} className="h-8 w-8 xl:h-16 xl:w-16" />
            <h3 className="text-xl xl:text-3xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-sm xl:text-xl text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-around md:m-5">
        {values2.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-8 xl:p-16 flex flex-col items-center text-center md:space-y-4 w-64 h-64 xl:w-[400px] xl:h-[400px]">
            <img src={value.icon} alt={value.title} className="h-8 w-8 xl:h-16 xl:w-16" />
            <h3 className="text-xl xl:text-3xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-sm xl:text-xl text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MissionValues;