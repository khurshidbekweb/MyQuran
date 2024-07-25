import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { QuranUtils } from "../utils/quran.utils";
import { PiShareNetwork } from "react-icons/pi";
import { LuPlay } from "react-icons/lu";
import { RiPauseLine } from "react-icons/ri";
import { useRef, useState } from "react";
import Loading from "../components/loading";


const Sura = () => {
    const {id} = useParams()
    const audioRef = useRef([])
    const [audio, setAudio] = useState(null)
    const {data, isLoading, isPending} = useQuery({
        queryKey: ["suralar"],
        queryFn: async ()=> await QuranUtils.getSurh(id)
    })
    console.log(data?.data);


    const playAudio = (index) => {
        if (audio !== null && audio!==index) {
            audioRef.current[audio].pause();
        }
        console.log(audioRef.current[index]);
        audioRef.current[index].play();        
        setAudio(index)         
    };
    const pauseAudio = (index) => {
        audioRef.current[index].pause();
        setAudio(null);
    };
    console.log(isPending);
    const playerAudio = (el) => {
        console.log(el);
        playAudio(el)
    }

    if(isLoading) return <Loading/>
    return (
        <div className="container overflow-hidden bg-white dark:bg-[#180B37]">
            <div className="ml-9 w-[50%]">
                <h1 className="text-[#9543FF] text-end dark:text-[white] mt-3 text-[35px] font-black">{data?.data.namaLatin}</h1>
                <h3 className="text-[29px] text-end embad font-semibold">{data?.data.nama}</h3>
            </div>
            <div className="body">
                {data?.data && data?.data.ayat.map(el => {
                    return <div key={el.nomorAyat} className="card w-[90%] mx-auto mt-10">
                        <audio ref={elRef => audioRef.current[el.nomorAyat] = elRef} src={el.audio['01']} type="audio/mpeg"></audio>
                                <div className="card-head flex justify-between items-center rounded-md bg-slate-100 p-2">
                                    <span className={`text-white bg-[#9543FF] rounded-full p-1 ${el.nomorAyat<10?'px-3':el.nomorAyat<100?'px-2':'px-1'}`}>{el.nomorAyat}</span>
                                    <div className="flex gap-4">
                                        <button><PiShareNetwork size={25}/></button>
                                        <button onClick={()=>playerAudio(el.nomorAyat)} className={audio==el.nomorAyat?'hidden':''}><LuPlay size={25}/></button>
                                        <button onClick={()=>pauseAudio(el.nomorAyat)} className={audio==el.nomorAyat?'':'hidden'}><RiPauseLine size={25} /></button>
                                    </div>
                                </div>
                                <div className="matn">
                                    <h3 className="embad text-[25px] text-end font-semibold mt-2">{el.teksArab}</h3>
                                </div>
                            </div>
                })}
            </div>
        </div>
    );
};

export default Sura;