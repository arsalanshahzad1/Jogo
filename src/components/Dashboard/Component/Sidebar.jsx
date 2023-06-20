import React from 'react'
import '../Assets/style/style.css'
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import avatar from '../Assets/images/avatar.png'
function Sidebar() {
    const [collapseSlider, setcollapseSlider] = useState(false)
    return (
        <div className={`SidebarMain ${collapseSlider ? "SidebarResponsive" : ""}`}>
            <div onClick={() => setcollapseSlider(!collapseSlider)} className={`DashboardCollapseBtnDiv ${collapseSlider ? "hide" : ""}`}>
                <CloseIcon />
            </div>
            <div onClick={() => setcollapseSlider(!collapseSlider)} className={`DashboardCollapseBtnDiv ${collapseSlider ? "" : "hide"}`}>
                <MenuIcon />
            </div>
            <div className={`SidebarMain-inner ${collapseSlider ? "hide" : ""}`}>
                <div className='SidebarMain-inner-1'>
                    <div className='AvatarHolder'>
                        {/* <img src={avatar} alt="" /> */}
                        <img alt="" />

                    </div>
                    <p className='UserName'>
                        Fahad Khan
                    </p>
                </div>
                <div className='SidebarMain-inner-2'>

                    <NavLink activeClassName="activelink" className='NoStyle' to='/dashboard'>
                        <p className='SidebarMain-inner-2-items'>
                            Dashboard
                        </p>
                    </NavLink >
                    <NavLink activeClassName="activelink" className='NoStyle' to='/dashboard/overview'>
                        <p className='SidebarMain-inner-2-items'>
                            Overview
                        </p>
                    </NavLink >

                </div>
            </div>
        </div>

    )
}

export default Sidebar