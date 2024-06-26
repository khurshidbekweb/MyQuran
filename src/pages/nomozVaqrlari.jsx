import NomozVaqtlariImg from '../assets/images/nomoz_vaqtlari.png'


const NomozVaqrlari = () => {
    return (
        <div className='container h-screen dark:bg-[#180B37]'>
            <div className="image-info relative">
                <h1 className='absolute'>Namoz vaqtlari</h1>
                <img className='w-full' src={NomozVaqtlariImg} alt="Nomoz vaqtlari" />
            </div>
        </div>
    );
};

export default NomozVaqrlari;