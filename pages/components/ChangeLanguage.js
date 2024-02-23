import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
function LanguageSelector(){
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState("az");
  
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => setSelectedLanguage(lng));
      };
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <div className='w-[45px] flex justify-center rounded-[5px] overflow-hidden box-border'>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className="dropdown w-auto bg-white max-[500px]:bg-transparent"
        >
   <h1>Az</h1>
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          className='absolute z-[9999]'
        >
        
        <MenuItem onClick={() => changeLanguage('en')}>En</MenuItem>
   
        <MenuItem  onClick={() => changeLanguage('az')}>Az</MenuItem>
       
        </Menu>
      </div>
    )
}
export default LanguageSelector
