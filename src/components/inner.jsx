import { Link } from "react-router-dom";
import NomozVaqtlari from '../assets/images/nomoz_vaqtlari.png'
import Quran from '../assets/images/Quran.png'


const Inner = () => {
    return (
        <div className="container mx-auto">
            <div className="pt-28 max-w-[414px] px-2 dark:bg-[#180B37] h-screen absolute top-0 z-[-1]">
            <Link to='/home/nomoz_vaqtlari' className="relative block"> 
                <h2 className="absolute w-[250px] bebas text-white text-[33px] bottom-14 left-3 font-semibold">Nomoz vaqtlari</h2>
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