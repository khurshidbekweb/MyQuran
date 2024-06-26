import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DarkMod from './darkMod';



const Navbar = () => {
    return (
        <div className="drak:bg-gray-900 bg-slate-400">
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:"25px", fontWeight:"700" }}>
                    MyQuran
                </Typography>
                    <DarkMod/>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    );
};

export default Navbar;