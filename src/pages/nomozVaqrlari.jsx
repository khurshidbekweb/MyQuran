import NomozVaqtlariImg from '../assets/images/nomoz_vaqtlari.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiCloudMoon } from "react-icons/ci";
import { useQuery } from '@tanstack/react-query';
import { PrayerTimeUtils } from '../utils/prayer_time.utils';


const NomozVaqrlari = () => {
    const date = useQuery({
        queryKey: "times",
        queryFn: PrayerTimeUtils.getDayTime
    })
    console.log(date?.data);
    return (
        <div className='container h-screen bg-[#180B37] dark:bg-[#180B37]'>
            <div className="image-info relative">
                <div className="info-prayer absolute top-2 left-4">
                    <h1 className='playfairFont font-bold  text-[38px] text-white'>Namoz vaqtlari</h1>
                    <h2 className='bebas text-[28px] text-white'>Tashketn</h2>
                    <p className='playfairFont text-[20px] text-white font-semibold mt-[-5px]'>-1:05:26</p>
                </div>
                <div className="main-info absolute text-center bottom-20">
                    <h2 className='text-[24px] font-bold text-white'>Bomdod <span className='ml-4'>04:17</span></h2>
                    <p className='text-[12px] mt-3 italic font-semibold px-4 text-white'>Lorem ipsum dolor sit, adipisicing elit. Ipsum dicta corporis illo aperiam fugiat!</p>
                </div>
                <img className='w-full' src={NomozVaqtlariImg} alt="Nomoz vaqtlari" />
                <div className="on-days absolute left-11 bottom-2 w-[75%] bg-white text-black rounded-[60px] flex justify-between items-center p-4">
                    <button><IoIosArrowBack size={25}/></button>
                    <h3 className='text-[19px] font-black'>20 Aprel 2024</h3>
                    <button><IoIosArrowForward size={25}/></button>
                </div>
            </div>
            <ul className="nomoz-vaqtlari mt-5">
                    <li className="time-card flex justify-between items-center w-[80%] mx-auto text-white">
                        <CiCloudMoon size={35}/>
                        <p className='text-[20px] font-bold'>Bomdod</p>
                        <p className='time text-5 font-bold'>02:58</p>
                    </li>
                    <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                        <CiCloudMoon size={35}/>
                        <p className='text-[20px] font-bold'>Bomdod</p>
                        <p className='time text-5 font-bold'>02:58</p>
                    </li>
                    <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                        <CiCloudMoon size={35}/>
                        <p className='text-[20px] font-bold'>Bomdod</p>
                        <p className='time text-5 font-bold'>02:58</p>
                    </li>
                    <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                        <CiCloudMoon size={35}/>
                        <p className='text-[20px] font-bold'>Bomdod</p>
                        <p className='time text-5 font-bold'>02:58</p>
                    </li>
                    <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                        <CiCloudMoon size={35}/>
                        <p className='text-[20px] font-bold'>Bomdod</p>
                        <p className='time text-5 font-bold'>02:58</p>
                    </li>
                    <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                        <CiCloudMoon size={35}/>
                        <p className='text-[20px] font-bold'>Bomdod</p>
                        <p className='time text-5 font-bold'>02:58</p>
                    </li>
            </ul>
            <button className='w-[50%] bg-white rounded-xl mx-auto block mt-8 p-2 font-medium'>Bir oylikni ko`rish</button>
        </div>
    );
};

export default NomozVaqrlari;