import { Link } from "react-router-dom";
import NomozVaqtlari from '../assets/images/nomoz_vaqtlari.png'
import Quran from '../assets/images/Quran.png'
import Loading from "./loading";
import { PrayerTimeUtils } from "../utils/prayer_time.utils";
import { useQuery } from "@tanstack/react-query";


const Inner = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["times"],
        queryFn: PrayerTimeUtils.getDayTime
    })
    const nowHour = new Date().getHours()
    let nowPrayer = []
    const arr = []
    if(data) Object.values(data?.times)?.forEach((el, i) => el.slice(0,2)>nowHour?arr.push(i):i)
    let num = arr[0];
    if(data) nowPrayer = Object.entries(data?.times)[num]
    if(isLoading) return <Loading/>
    return (
        <div className="container mx-auto">
            <div className="pt-28 max-w-[414px] px-2 dark:bg-[#180B37] h-screen absolute top-0 z-[-1]">
            <Link to='/home/nomoz_vaqtlari' className="relative block"> 
                <h2 className="absolute w-[250px] bebas text-white text-[33px] bottom-14 left-3 font-semibold">Namoz vaqtlari</h2>
                <h2 className='absolute bottom-5 left-3 text-[24px] font-bold text-white uppercase'>{nowPrayer[0]} <span className='ml-4'>{nowPrayer[1]}</span></h2>
                <img className="w-[100%] h-52 rounded-lg" src={NomozVaqtlari} alt="Nomoz vaqtlatari"/>
            </Link>
            <Link to='/home/quran' className="relative h-52 mt-4 dark:bg-slate-600 bg-[#263D6F] block mx-auto rounded-lg">
                <h2 className="absolute bebas text-white text-[33px] bottom-12 left-3 font-semibold">Qur`on</h2>
                <img className="w-[60%]  ml-auto" src={Quran} alt="Quran" />
            </Link>
        </div>
        </div>
    );
};

export default Inner;