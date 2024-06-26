
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { GrSun } from "react-icons/gr";
import { RiMoonClearLine } from "react-icons/ri";
import { ThemeContext } from "../helper/themeContex";

const DarkMod = () => {
    const {toggleTheme, themeChange} = useContext(ThemeContext)

    useEffect(() => {
        if (themeChange) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('dark-mode', JSON.stringify(true));
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('dark-mode', JSON.stringify(false));
        }
      }, [themeChange]);
    return (
        <>
            <Button onClick={toggleTheme} color="inherit">
                {
                    themeChange?<GrSun size={25}/>:<RiMoonClearLine size={25}/>
                }         
            </Button>
        </>
    );
};

export default DarkMod;