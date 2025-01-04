import whatsapp from './../../assets/whatsApp.svg'
import homePoster from './../../assets/homePoster.png';
import homeVideo from './../../assets/homeVideo.png';
import MissionValues from './MissionValues.jsx';
import OurProducts from './OurProducts.jsx';
import { useNavigate } from "react-router-dom";
import tablets from "./../../assets/tablets.png"

const Home = () => {
    // const paraClass = "text-4xl xl:text-6xl font-thin"
    let navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen">
                <div
                    className="w-full h-screen bg-cover bg-center
                       flex flex-col justify-center text-center space-y-40"
                    style={{ backgroundImage: `url(${homeVideo})` }}
                >
                    <div>
                        <h1 className="text-white text-2xl md:text-3xl xl:text-5xl font-bold">
                            Trusted Remedies for Better Tomorrow
                        </h1>
                        <h2 className="text-xl md:text-2xl text-white xl:text-4xl font-bold">
                            Harnessing science to deliver solutions you can trust
                        </h2>
                    </div>
                    <div className='flex justify-end mx-20'>
                        <img src={whatsapp} className="md:w-30 md:h-30 cursor-pointer bg-green-800 rounded-lg" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-slate-200 flex flex-col justify-center text-center'>
                <div className='p-5 md:p-20'>
                    <img src={homePoster} className='w-max' alt="" />
                </div>
                <div className='text-3xl'>
                    Our Best <span className='text-orange-600'>Products</span>
                    <OurProducts />
                </div>
                <MissionValues />
                <div className='flex flex-col-reverse md:flex-row justify-around'>
                    <div className='flex flex-col p-5 md:w-[50%] justify-start text-start m-5 xl:m-10'>
                        <div className='text-[#218275] text-6xl xl:text-7xl font-extrabold'>OUR</div>
                        <div className='text-[#218275]  text-6xl xl:text-7xl font-extrabold'>Journey</div>
                        <div className='text-[#218275]  mt-8 xl:text-2xl '>
                            Tridala Pharmaceuticals has been dedicated to improving global health through innovative pharmaceutical solutions. From breakthrough treatments to a commitment to sustainability
                        </div>
                        <div>
                            <button onClick={() => { navigate('purpose'); }} className='bg-[#218275] px-8 xl:px-12 py-3 xl:py-5 rounded-full text-white mt-10 xl:mt-16'>More</button>
                        </div>
                    </div>
                    <div className='p-5 md:w-[50%] flex items-center flex-col m-5 xl:m-10'>
                        <div className='flex justify-end mt-5'>
                            <div className='text-2xl font-bold'>Since <span className='text-green-600'>2024</span></div>
                        </div>
                        <img src={tablets} className='h-84 xl:h-96 xl:w-96' alt="Medicine image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;