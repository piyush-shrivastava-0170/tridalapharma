import purposePoster from './../../assets/purposePoster.png'
import OurStory from './OurStory.jsx';
export default function Purpose() {
  return (
    <>
      <div>
        <img src={purposePoster} alt="" />
      </div>
      <OurStory />
      <div className='flex flex-col text-center mt-5 '>
        <div className='text-2xl md:text-4xl font-bold text-[#329284] my-4'>MISSION & VALUES</div>
        <div className="text-l xl:text-xl text-justify mx-10 md:mx-20 xl:mx-60 text-[#329284] ">Tridala Pharmaceuticals is dedicated to transforming healthcare globally through innovative research and reliable distribution of affordable medications. Our state-of-the-art facilities and experienced team enable us to produce a wide range of pharmaceuticals, from everyday essentials to advanced treatments, all designed to meet the highest standards of quality. We maintain strong supply chain partnerships to ensure the consistent availability of our products, empowering healthcare providers to deliver effective care without compromising on affordability.</div>
        <div className="flex justify-center">
          <div className="flex flex-col border-2 p-2 my-4 mx-3 md:mx-8 rounded-xl w-80 xl:w-[450px]">
            <div className="text-[#329284] text-xl md:text-2xl xl:text-3xl font-bold">OUR VISION</div>
            <div className="text-[#329284] text-justify text-sm md:text-l">Our vision is to be the world&apos;s trusted provider of innovative, high-quality, and affordable healthcare solutions, empowering hospitals and clinics to enhance patient outcomes across the nation.</div>
          </div>
          <div className="flex flex-col border-2 p-2 my-4 mx-3 md:mx-8 rounded-xl w-80 xl:w-[450px]">
            <div className="text-[#329284] text-xl md:text-2xl xl:text-3xl font-bold">OUR COMMITMENT</div>
            <div className="text-[#329284] text-justify text-sm md:text-l">We are committed to providing affordable healthcare solutions that empower healthcare providers and improve patient lives. Every product undergoes rigorous quality assurance, guaranteeing safety and efficacy while remaining cost-effective.</div>
          </div>
        </div>
      </div>
    </>
  )
}
