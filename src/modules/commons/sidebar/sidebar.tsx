import "./sidebar.css"
import React from 'react';
import "../styles/index.css";
import { Layout, Typography } from 'antd';
import CustomMenu from "../menu/menu";

const { Title } = Typography;

const Sidebar: React.FC = () => {
    return (
        <Layout className='bg-grey wth-ft-cntnt min-hght-100vh' id='sidebar-layout'>
            <div id="sidebar-head-container">
                <svg width="40" fill="none" height="22" viewBox="0 0 268 150" xmlns="http://www.w3.org/2000/svg"><rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill-opacity="0.4" fill="url(#paint0_linear_7821_79167)" transform="matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill-opacity="0.4" fill="url(#paint1_linear_7821_79167)" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"></rect><defs><linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint0_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint1_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg>
                <Title className="md-title">Materialize</Title>
                <svg className="MuiBox-root css-w4pijj" id="back-arrow" fill="none" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(76, 78, 100, 0.6)" d="M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z"></path><path fill="rgba(76, 78, 100, 0.38)" d="M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z"></path></svg>
            </div>

            <div style={{ marginTop: 60, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Title className="sm-title" style={{ color: "#4C4E6461", marginLeft: 16 }}>APPS & PAGES</Title>
                <CustomMenu />
            </div>
        </Layout>
    )
};

export default Sidebar;