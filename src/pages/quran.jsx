import { useQuery } from "@tanstack/react-query";
import { QuranUtils } from "../utils/quran.utils";
import Loading from "../components/loading";
import QuranImg from '../assets/images/quranhone.png'
import { Link } from "react-router-dom";
import AudioCard from "../components/audioCard";


const Quran = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['quranAll'],
        queryFn: QuranUtils.getQuran
    })
    if(isLoading) return <Loading/>
    return (
        <div className="container overflow-hidden bg-white dark:bg-[#180B37]">
            <div className="head-image relative h-[300px] dark:text-white">
                <div className="info w-[50%] pl-2">
                    <h1 className="text-[#9543FF] dark:text-[white] mt-3 text-[35px] font-black">My Quran</h1>
                    <h3 className="text-[25px] font-semibold embad italic">Qur`onni oson o`qing</h3>
                    <h2 className="text-[30px] font-black mt-2">19:52</h2>
                    <h2 className="text-[17px] mt-[-5px] font-semibold ">2024-06-27</h2>
                    <Link className="bg-[#763FBC] relative text-white p-2 w-[80%] rounded-md mt-4 block font-bold text-center z-10" to='/home/nomoz_vaqtlari'>Shom 20:03</Link>
                </div>
                <img className="absolute right-[-70px] bottom-2 z-0" src={QuranImg} alt="Quran image" />
            </div>
            <div className="body-quran px-2">
                {data?.data.length && data.data.map(el => {
                    return <AudioCard key={el.nomor} el={el}/>
                })}
            </div>
        </div>
    );
};

export default Quran;