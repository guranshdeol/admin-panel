import {Box, IconButton , useTheme} from "@mui/material"
import { useContext} from "react";
import { ColorModeContext, token } from "../../Theme";
import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar=()=>{
    const theme=useTheme();
    const colors= token(theme.palette.mode);
    const colorMode=useContext(ColorModeContext);

    return (<box display="flex" justifyContent="space-Between" p={2}>
        {/* {SEARCH BAR} */}
        <Box display="flex" 
        backgroundColor={colors.primary[400]}
        borderRadius="3px">
            <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
            <IconButton type="button" sx={{ p:1 }}>
                <SearchIcon/>
            </IconButton>
        </Box>
        {/* {ICONS} */}
        <box display="flex">
            <IconButton onclick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ?(
                    <DarkModeOutlinedIcon/>
                ):(
                <LightModeOutlinedIcon />
                )}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </box>
    </box>);
}
export default Topbar;