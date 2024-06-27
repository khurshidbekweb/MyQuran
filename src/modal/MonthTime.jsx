import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { PrayerTimeUtils } from "../utils/prayer_time.utils";

const MonthTime = () => {
    const [show, setShow] = useState(false)
    const {data} = useQuery({
        queryKey: ['monthTimes'],
        queryFn: PrayerTimeUtils.getMonthTime
    })
    return (
        <div className="container overflow-hidden">
            <Button onClick={()=>setShow(true)} sx={{backgroundColor: 'white', color: "black", margin: "30px auto", display: "block", ":hover":{backgroundColor: 'white', color: "black"}}} variant="outlined" size="medium">
                Bir haftalik taqvimni ko`rish
            </Button>
            <div className={show?"fixed container top-0 w-full h-screen bg-[#180b37f7] bg-blur-sm transition-all duration-[0.5s] translate-y-[0px]":"fixed top-0 transition-all duration-[0.5s] translate-y-[-900px] h-0 w-full container"}>
                <h2 className="text-center mt-16 text-white text-[20px] font-bold">Bir haftalik taqvimni ko`rish</h2>
                <button className="fixed top-5 text-white right-5" onClick={()=>setShow(false)}><RiCloseLargeLine size={25}/></button>
                
                <div className="body-time px-1 rounded-md overflow-hidden mt-5">
                    <table className="min-w-full bg-white rounded-xl border border-gray-200 shadow-2xl">
                        <thead className="bg-[#4C3BCF] text-white outline-none">
                            <tr>
                                <th className="py-2 border-b">Kun</th>
                                <th className="py-2 border-b">Bomdod</th>
                                <th className="py-2 border-b">Quyosh</th>
                                <th className="py-2 border-b">Peshin</th>
                                <th className="py-2 border-b">Asr</th>
                                <th className="py-2 border-b">Shom</th>
                                <th className="py-2 border-b">Hufton</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {data?.length && data.map(el => {
                                return <tr className="bg-gray-50" key={el.date}>
                                            <td className="py-2 border-b">{el.day} {el.weekday.slice(0, 2)}</td>
                                            <td className="py-2 border-b">{el.times['tong_saharlik']}</td>
                                            <td className="py-2 border-b">{el.times['quyosh']}</td>
                                            <td className="py-2 border-b">{el.times['peshin']}</td>
                                            <td className="py-2 border-b">{el.times['asr']}</td>
                                            <td className="py-2 border-b">{el.times['shom_iftor']}</td>
                                            <td className="py-2 border-b">{el.times['hufton']}</td>                                
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MonthTime;