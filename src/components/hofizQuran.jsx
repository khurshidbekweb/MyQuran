import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Juhany from '../assets/images/Juhany.jpg'
import Qasim from '../assets/images/Abdul-Muhsin.jpeg'
import Sudais from '../assets/images/Abdurrahman.jpg'
import Dossari from '../assets/images/Dosari.jpg'
import Mishary from '../assets/images/Mishary.jpeg'


const HofizQuran = () => {
    const [open, setOpen] = useState(true)
    const isClose = useRef(null)
    const closeMOdal = (e) => {
        if(e.target.classList[0]==='overlay'){
            setOpen(false)
        }
    }

    const changeHofiz = (el) => {
        localStorage.setItem('hofiz', el)
        setOpen(false)
    }
    return (          
            <div onClick={closeMOdal}>
                <span ref={isClose} className={`overlay bg-[#41404051] z-10 fixed w-screen top-0 left-0 h-screen ${open?'block':'hidden'}`}></span>
                <ul className={`${open?'flex':'hidden'} body-wrp left-auto max-w-[415px] h-[490px] gap-4 fixed top-28 p-5 py-10 rounded-2xl bg-white z-20 flex-col justify-between`}>
                <li><button className="absolute top-2 right-3" onClick={()=>setOpen(false)}><IoCloseSharp size={25}/></button></li>
                <li className="text-center flex items-center justify-between gap-x-6">
                    <img className="rounded-lg w-[65px]" src={Juhany} alt="" />
                    <p className="text-[18px] font-semibold">Abdullah Al-Juhany</p>
                    <button onClick={() => changeHofiz('01')} className="bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-98% text-white font-bold p-2 px-5 rounded-lg  to-emerald-400">Tanlash</button>
                </li>
                <li className="text-center flex items-center justify-between">
                    <img className="rounded-lg w-[65px]" src={Qasim} alt="" />
                    <p className="text-[18px] font-semibold">Abdul Muhsin Al-Qasim</p>
                    <button onClick={() => changeHofiz('02')} className="bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-98% text-white font-bold p-2 px-5 rounded-lg  to-emerald-400">Tanlash</button>
                </li>
                <li className="text-center flex items-center justify-between">
                    <img className="rounded-lg w-[65px]" src={Sudais} alt="" />
                    <p className="text-[18px] font-semibold">Abdurrahman as-Sudais</p>
                    <button onClick={() => changeHofiz('03')} className="bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-98% text-white font-bold p-2 px-5 rounded-lg  to-emerald-400">Tanlash</button>
                </li>
                <li className="text-center flex items-center justify-between">
                    <img className="rounded-lg w-[65px]" src={Dossari} alt="" />
                    <p className="text-[18px] font-semibold">Ibrahim Al-Dossari</p>
                    <button onClick={() => changeHofiz('04')} className="bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-98% text-white font-bold p-2 px-5 rounded-lg  to-emerald-400">Tanlash</button>
                </li>
                <li className="text-center flex items-center justify-between">
                    <img className="rounded-lg w-[65px]" src={Mishary} alt="" />
                    <p className="text-[18px] font-semibold">Misyari Rasyid Al-Afasi</p>
                    <button onClick={() => changeHofiz('05')} className="bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-98% text-white font-bold p-2 px-5 rounded-lg  to-emerald-400">Tanlash</button>
                </li>
            </ul>
            </div>
    );
};

export default HofizQuran;