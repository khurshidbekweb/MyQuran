import { Link } from "react-router-dom";
import NomozVaqtlari from '../assets/images/nomoz_vaqtlari.png'
import Quran from '../assets/images/Quran.png'
import Navbar from "../components/header";

const Home = () => {
    return (
    <>
        <Navbar/>
        <div className="mt-10 px-2">
            <Link to='/nomoz_vaqtlari'>
                <img className="w-full h-52 rounded-lg" src={NomozVaqtlari} alt="Nomoz vaqtlatari"/>
            </Link>
            <Link to='/quran' className="w-full h-52 mt-4 bg-[#263D6F] block mx-auto rounded-lg">
                <img className="w-[60%]  ml-auto" src={Quran} alt="Quran" />
            </Link>
        </div>
    </>
    );
};

export default Home;