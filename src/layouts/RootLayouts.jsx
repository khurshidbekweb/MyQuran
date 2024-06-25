import { Outlet } from "react-router-dom";


const RootLayouts = () => {
    return (
        <>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default RootLayouts;