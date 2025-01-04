/* eslint-disable react/jsx-key */
import teamPoster from './../../assets/teamPoster.png';
import founder from './../../assets/people/founder.png';
import hrf from './../../assets/people/hrf.png';
import ceo from './../../assets/people/ceo.png';
import vp from './../../assets/people/vp.png';
import marketing from './../../assets/people/marketing.png';
import chairperson from './../../assets/people/chairperson.png';
import PersonCard from './PersonCard';
export default function Team() {
  const personsRow1 = [
    {
      img: chairperson,
      description: "Usha ensures we stay true to our mission, overseeing strategy and governance with a focus on ethics, excellence, and delivering affordable, quality medication",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: hrf,
      description: "Monika oversees HR and Finance, driving key operations that contribute significantly to Tridala's growth ans success",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: marketing,
      description: "Kushala leads our marketing efforts, balancing strategy and compliance to create impactful, results-driven campaigns.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
  ];
  const personsRow2 = [
    {
      img: ceo,
      description: "Graduated from Bangalore Medical College and then completed M.D in pediatrics at one of the top most institute of post graduate education and training centre in India. Worked at St. Martha's Hospital, Bangalore consultant pediatrician for 5 years.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: vp,
      description: "With 15+ years in pharma sales and marketing, including roles at Empire Venson and Hetero Healthcare, Shantha drives our business growth",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
  ]
  return (
    <>
      <div className="bg-slate-200">
        <div>
          <img src={teamPoster} alt="founder image" />
        </div>
        <div className="flex flex-col text-center space-y-3 md:space-y-10 m-5 md:m-10">
          <div className='text-[#218275] text-2xl md:text-4xl font-bold'>MEET OUR TEAM</div>
          <div className="text-xl font-bold md:text-3xl">Our Founder</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around space-y-10 md:space-y-0 md:space-x-10 xl:space-x-20 p-5 md:p-10">
          <div className="relative rounded-lg overflow-hidden md:w-full md:max-w-fit">
            <img className="w-fit h-48 md:h-72 xl:h-96" src={founder} alt="Profile" />
            <div className="absolute bottom-0 w-full bg-teal-600 bg-opacity-90 text-center py-2 rounded-b-lg">
              <p className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Mr. Kempraju K
              </p>
            </div>
          </div>
          <div className="text-[#218275] text-center md:text-left text-sm font-medium md:text-xl xl:text-3xl max-w-fit space-y-4">
            <div className='text-justify'>
              Kemparju. K was born into a farming family He completed his education at a government school and developed a long-term vision to contribute to society through a multidisciplinary approach. He began his career as a small entrepreneur across various fields, achieving success through his dedication, discipline, and devotion.
            </div>
            <div className='text-justify'>
              His commitment to social service led him to enter the political arena. He realised that the community needed accessibility to affordable healthcare.  And decided to establish a framework of Trusted, Revolutionary, Innovative, and Defined Affordability in collaboration with a league of esteemed pharmaceutical and medical practitioners. That was when Tridala Pharmaceutical was born
            </div>
          </div>
        </div>
        <div className='flex justify-center p-5 md:p-10'>
          <div className='text-orange-500 text-2xl font-bold'>Board of Directors</div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0 p-2 md:py-10">
          {personsRow1.map((person)=>{
            return (<PersonCard person={person} />);
          })}
        </div>
        <div className="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0 p-2 md:py-10">
        {personsRow2.map((person)=>{
            return (<PersonCard person={person} />);
          })}
        </div>
      </div>
    </>
  )
}
