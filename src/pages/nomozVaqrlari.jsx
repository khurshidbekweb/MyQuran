import NomozVaqtlariImg from "../assets/images/nomoz_vaqtlari.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiCloudMoon } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { PrayerTimeUtils } from "../utils/prayer_time.utils";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiSunDimBold } from "react-icons/pi";
import { WiSunrise } from "react-icons/wi";
import { PiSunHorizonDuotone } from "react-icons/pi";
import { RiMoonFoggyLine } from "react-icons/ri";
import Loading from "../components/loading";
import TimeLeft from "../components/timeLeft";
import MonthTime from "../modal/MonthTime";

const NomozVaqrlari = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["times"],
        queryFn: PrayerTimeUtils.getDayTime,
    });
    const nowHour = new Date().getHours();
    const nowMinut = new Date().getMinutes();
    let nowPrayer = [];
    const arr = [];
    if (data)
        Object.values(data?.times)?.forEach((el, i) =>
            el.slice(0, 2) >= nowHour && el.slice(3, 5) >= nowMinut ? arr.push(i) : i
        );
    let num = arr[0];
    if (data) nowPrayer = Object.entries(data?.times)[num];
    let year = new Date().getFullYear()
    let month;
    switch (new Date().getMonth()) {
        case 0:
            month = "Yanvar";
            break;
        case 1:
            month = "Fevral";
            break;
        case 2:
            month = "Mart";
            break;
        case 3:
            month = "Aprel";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Iyun";
            break;
        case 6:
            month = "Iyul";
            break;
        case 7:
            month = "Iyun";
            break;
        case 8:
            month = "Iyun";
            break;
        case 9:
            month = "Iyun";
            break;
        case 10:
            month = "Iyun";
            break;
        case 11:
            month = "Iyun";
    }
    let day = data?.date.slice(8, 10)

    if (isLoading) return <Loading />;
    return (
        <div className="container h-screen bg-[#180B37] dark:bg-[#180B37]">
            <div className="image-info relative">
                <div className="info-prayer absolute top-2 left-4">
                    <h1 className="playfairFont font-bold  text-[38px] text-white">
                        Namoz vaqtlari
                    </h1>
                    <h2 className="bebas text-[28px] text-white">{data?.region}</h2>
                    <TimeLeft data={data} time={nowPrayer[0]} />
                </div>
                <div className="main-info absolute text-center bottom-20">
                    <h2 className="text-[24px] font-bold text-white uppercase">
                        {nowPrayer[0]} <span className="ml-4">{nowPrayer[1]}</span>
                    </h2>
                    <p className="text-[12px] mt-3 italic font-semibold px-4 text-white">
                        Lorem ipsum dolor sit, adipisicing elit. Ipsum dicta corporis illo
                        aperiam fugiat!
                    </p>
                </div>
                <img className="w-full" src={NomozVaqtlariImg} alt="Nomoz vaqtlari" />
                <div className="on-days absolute left-11 bottom-2 w-[75%] bg-white text-black rounded-[60px] flex justify-between items-center p-4">
                    <button>
                        <IoIosArrowBack size={25} />
                    </button>
                    <h3 className="text-[19px] font-black">{day}-{month}-{year}</h3>
                    <button>
                        <IoIosArrowForward size={25} />
                    </button>
                </div>
            </div>
            <ul className="nomoz-vaqtlari mt-5">
                <li className="time-card flex justify-between items-center w-[80%] mx-auto text-white">
                    <CiCloudMoon size={35} />
                    <p className="text-[20px] font-bold">Bomdod</p>
                    <p className="time text-5 font-bold">{data?.times.tong_saharlik}</p>
                </li>
                <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                    <TiWeatherPartlySunny size={35} />
                    <p className="text-[20px] font-bold text-start">Quyosh</p>
                    <p className="time text-5 font-bold">{data?.times.quyosh}</p>
                </li>
                <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                    <PiSunDimBold size={33} />
                    <p className="text-[20px] font-bold">Peshin</p>
                    <p className="time text-5 font-bold">{data?.times.peshin}</p>
                </li>
                <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                    <WiSunrise size={40} />
                    <p className="text-[20px] font-bold text-start">Asr</p>
                    <p className="time text-5 font-bold">{data?.times.asr}</p>
                </li>
                <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                    <PiSunHorizonDuotone size={35} />
                    <p className="text-[20px] font-bold">Shop</p>
                    <p className="time text-5 font-bold">{data?.times.shom_iftor}</p>
                </li>
                <li className="time-card mt-1 flex justify-between items-center w-[80%] mx-auto text-white">
                    <RiMoonFoggyLine size={33} />
                    <p className="text-[20px] font-bold">Hufton</p>
                    <p className="time text-5 font-bold">{data?.times.hufton}</p>
                </li>
            </ul>
            <MonthTime />
        </div>
    );
};

export default NomozVaqrlari;
