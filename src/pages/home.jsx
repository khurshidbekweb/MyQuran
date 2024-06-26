import { Link } from "react-router-dom";
import NomozVaqtlari from '../assets/images/nomoz_vaqtlari.png'
import Quran from '../assets/images/Quran.png'
import Navbar from "../components/header";

const Home = () => {
    return (
    <>
        <Navbar/>
        <div className="pt-32 px-2 dark:bg-[#180B37] h-screen absolute top-0 z-[-1]">
            <Link to='/nomoz_vaqtlari'>
                <img className="w-full h-52 rounded-lg" src={NomozVaqtlari} alt="Nomoz vaqtlatari"/>
            </Link>
            <Link to='/quran' className="w-full h-52 mt-4 dark:bg-slate-600 bg-[#263D6F] block mx-auto rounded-lg">
                <img className="w-[60%]  ml-auto" src={Quran} alt="Quran" />
            </Link>
        </div>
    </>
    );
};

export default Home;