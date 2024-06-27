import { useQuery } from "@tanstack/react-query";
import { QuranUtils } from "../utils/quran.utils";
import Loading from "../components/loading";
import QuranImg from '../assets/images/quranhone.png'
import { Link } from "react-router-dom";
import Border from '../assets/icons/border.svg'
import { VscDebugStart } from "react-icons/vsc";
import { HiOutlineBookmark } from "react-icons/hi";


const Quran = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['quranAll'],
        queryFn: QuranUtils.getQuran
    })
    console.log(data?.data);
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
                    return <div key={el.nomor} className="card mt-10 h-16 flex justify-between items-center">
                                <span className="block bg-[#9543FF] h-16 rounded-lg w-2"></span>
                                <div className="main-info w-[95%] flex justify-between items-center hover:shadow-2xl p-2 py-4 rounded-md">
                                    <div className="flex items-center gap-x-4">
                                        <div className="relative text-center">
                                            <img className="w-[50px]" src={Border} alt="" />
                                            <p className={`absolute top-[12px] font-bold  ${el.nomor<9?'left-5':el.nomor<99?'left-4':'left-3'} text-center`}>{el.nomor}</p>
                                        </div>
                                        <div className="">
                                            <h2 className="embad text-[20px] font-semibold">{el.namaLatin}</h2>
                                            <h3 className="embad text-[15px] font-semibold text-[#8789A3] uppercase">{el.tempatTurun} {el.jumlahAyat} Ayat</h3>
                                        </div>
                                    </div>
                                    <div className="audio pr-2">
                                        <h2 className="arab text-[20px] font-bold">{el.nama}</h2>
                                        <button className="mr-2"><VscDebugStart size={20}/></button>
                                        <button><HiOutlineBookmark size={20}/></button>
                                    </div>
                                </div>
                            </div>
                })}
            </div>
        </div>
    );
};

export default Quran;