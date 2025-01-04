import image1 from './../../assets/ourStory/image1.png';
import image2 from './../../assets/ourStory/image2.png';
import image3 from './../../assets/ourStory/image3.png';
const OurStory = () => {
    return (
        <div className="bg-[#189D90] p-6 flex flex-col md:items-start md:flex-row md:justify-around xl:p-16">
            <div className="text-left">
                <div className="text-3xl md:text-6xl font-bold " style={{ color: 'transparent', WebkitTextStroke: '1px #fff' }}>OUR</div>
                <div className=" text-3xl md:text-6xl font-extrabold text-orange-500">STORY</div>
                <div className="mt-8 space-y-6">
                    <div className="flex md:items-start justify-center items-center">
                        <div className="h-[900px] md:h-[750px] xl:h-[700px] w-1 bg-white"></div>
                        <div className='space-y-8'>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 h-1 bg-white"></div>
                                <div className="text-white text-sm md:text-xl xl:text-3xl">Kemparaju. K was born into a farming family in Cheemasandra village, located near Bengaluru city. He completed his education at a government school and developed a long-term vision to contribute to society through a multidisciplinary approach. He began his career as a small entrepreneur across various fields, achieving success through his dedication, discipline, and devotion.</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 h-1 bg-white"></div>
                                <div className="text-white text-sm md:text-xl xl:text-3xl">His commitment to social service led him to enter the political arena. As he progressed from Gram Panchayat to the State Assembly, he encountered significant gaps in education, healthcare, rural development, and sanitation. Over the past 20 years, Kemparaju. K has played a pivotal role in modernizing numerous schools and hospitals to meet contemporary challenges and leverage available technology. He has expressed tremendous satisfaction in enhancing rural development through the improvement of infrastructure, including roads, drainage systems, drinking water supply, and various other amenities.</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 h-1 bg-white"></div>
                                <div className="text-white text-sm md:text-xl xl:text-3xl">The global impact of the COVID-19 pandemic highlighted the critical shortcomings in the availability, accessibility, and affordability of healthcare. Kemparju. K focused on comprehensive rural development. This initiative has provided ambulance services and assistance to over 35,000 families. Additionally, he has extended support to bereaved individuals and provided food kits to more than 100,000 daily-wage families for nearly three months through a well-established trust “Swami Vivekananda Foundation” which was established by Kempraju K in 2015</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 h-1 bg-white"></div>
                                <div className="text-white text-sm md:text-xl xl:text-3xl">Recognizing that the community needed more than just food assistance, he and his family—serving as the board of directors—established a framework of Trusted, Revolutionary, Innovative, Defined Affordability in collaboration with a league of esteemed pharmaceutical and medical practitioners. This initiative aims to ensure the community has access to a wide range of affordable medicines, thereby addressing a critical need within the community.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col justify-center items-center space-y-4">
                <img src={image1} alt="Story 1" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 bg-white  p-2" />
                <img src={image2} alt="Story 2" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 bg-white  p-2" />
                <img src={image3} alt="Story 3" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 bg-white  p-2" />
            </div>
        </div>
    );
};

export default OurStory;