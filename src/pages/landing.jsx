import { useNavigate } from 'react-router-dom';
import LandingImg from '../assets/images/quran 1.svg'

const Landing = () => {
    const navigate = useNavigate()
    setTimeout(()=>{
        navigate('/home')
    }, 1500)
    return (
        <div className="container mx-auto p-3 text-center">
            <img className='mx-auto mt-28' src={LandingImg} alt="" />
            <h1 className='text-[#9543FF] mt-3 text-[30px] font-bold'>My Quran</h1>
            <p className='text-[15px] mt-2 font-semibold text-[#A8A8A8]'>Al-Qur`onni oson o`qing</p>
        </div>
    );
};

export default Landing;