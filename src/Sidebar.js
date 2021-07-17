import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src ="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA3MTNfMjIg%2FMDAxNTk0NjA5NDgzMjE2.hs4SJO1i9fdMB8Ns-8T1_Veemmfe33fbnEX4e4fOWjgg.FXoM9ApP2No1-pgjrSS7xoSMQbFmthTluMQLXgI7Pgog.JPEG%2F20200713_111111_089.jpg&type=sc960_832" title="HwiJeong" />
            <SidebarRow Icon ={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon ={EmojiFlagsIcon} title="Pages"/> 
            <SidebarRow Icon ={PeopleIcon} title="Friends"/> 
            <SidebarRow Icon ={ChatIcon} title="Messenger"/> 
            <SidebarRow Icon ={StorefrontIcon} title="Marketplace"/> 
            <SidebarRow Icon ={VideoLibraryIcon} title="Viedos"/> 
            <SidebarRow Icon ={ExpandMoreOutlinedIcon} title="Marketplace"/> 
        </div>
    )
}

export default Sidebar
