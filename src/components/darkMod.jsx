
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { GrSun } from "react-icons/gr";
import { RiMoonClearLine } from "react-icons/ri";

const DarkMod = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('dark-mode', JSON.stringify(true));
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('dark-mode', JSON.stringify(false));
        }
      }, [darkMode]);
    return (
        <>
            <Button onClick={() => setDarkMode(!darkMode)} color="inherit">
                {
                    darkMode?<RiMoonClearLine size={25}/>:<GrSun size={25}/>
                }         
            </Button>
        </>
    );
};

export default DarkMod;