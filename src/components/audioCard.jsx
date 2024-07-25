import PropTypes from 'prop-types';
import { VscDebugStart } from "react-icons/vsc";
import { HiOutlineBookmark } from "react-icons/hi";
import { VscDebugPause } from "react-icons/vsc";
import { useRef, useState } from "react";
import Border from '../assets/icons/border.svg'
import { Link } from 'react-router-dom';


const AudioCard = ({el, panning}) => { 
    console.log(panning);
    const audioRefs = useRef([]);
    console.log(el);
    const [playingIndex, setPlayingIndex] = useState(null);
    
    const playAudio = (index) => {
        if (playingIndex !== null && playingIndex!==index) {
            audioRefs.current[playingIndex].pause();
        }
        console.log(audioRefs.current[index]);
        audioRefs.current[index].play();        
        setPlayingIndex(index)         
    };
    const hofiz = localStorage.getItem('hofiz')
    const pauseAudio = (index) => {
        audioRefs.current[index].pause();
        setPlayingIndex(null);
    };
    console.log(el.audioFull[hofiz]);
    return (
        <div className="card mt-10  h-16 cursor-pointer flex justify-between items-center">
            <span className="block bg-[#9543FF] dark:bg-white h-16 rounded-lg w-2"></span>
            <audio ref={elRef => audioRefs.current[el.nomor] = elRef} src={el.audioFull[hofiz]} type="audio/mpeg"></audio>
            <div className="main-info w-[95%] flex justify-between dark:text-white items-center hover:shadow-2xl p-2 py-4 rounded-md">
                <Link to={`/home/quran/${el.nomor}`} className="flex items-center gap-x-4 w-[80%]">
                    <div className="relative text-center">
                        <img className="w-[50px]" src={Border} alt="" />
                        <p className={`absolute top-[12px] font-bold ${el.nomor < 9 ? 'left-5' : el.nomor < 99 ? 'left-4' : 'left-3'} text-center`}>{el.nomor}</p>
                    </div>
                    <div className="">
                        <h2 className="embad text-[20px] font-semibold">{el.namaLatin}</h2>
                        <h3 className="embad text-[15px] font-semibold text-[#8789A3] uppercase">{el.tempatTurun} {el.jumlahAyat} Ayat</h3>
                    </div>
                </Link>
                <div className="audio pr-2">
                    <h2 className="arab text-[20px] font-bold">{el.nama}</h2>
                    <button onClick={()=> playAudio(el.nomor)} className={playingIndex !== el.nomor ? "mr-2" : "hidden"}><VscDebugStart size={20} /></button>
                    <button onClick={() => pauseAudio(el.nomor)} className={playingIndex === el.nomor ? "mr-2" : "hidden"}><VscDebugPause size={20} /></button>
                    <button><HiOutlineBookmark size={20} /></button>
                </div>
            </div>
        </div>
    );
};


AudioCard.propTypes = {
    el: PropTypes.shape({
        nomor: PropTypes.number.isRequired,
        audioFull: PropTypes.object.isRequired,
        namaLatin: PropTypes.string.isRequired,
        tempatTurun: PropTypes.string.isRequired,
        jumlahAyat: PropTypes.number.isRequired,
        nama: PropTypes.string.isRequired
    }).isRequired
};

export default AudioCard;