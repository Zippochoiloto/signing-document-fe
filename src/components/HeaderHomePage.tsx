import React, { useState } from "react";
import Style from "./StylesComponents.module.css"
import IconDedoco from "../icon/IconDedoco.png"
import IconUserName from "../icon/FrameUserName.png"
import { Button, Menu, MenuItem, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeaderHomePage() {
    const [anchorEl, setAnchorEl] = useState(null)
    const navigation = useNavigate()
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        setAnchorEl(null);
        localStorage.clear()
        navigation('/')
    }
    return (
        <div className={Style.headerHomePageContainer}>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 5 }} >
                    <img src={IconDedoco} alt="" />
                </div>
                <div>
                    <Tabs aria-label="nav tabs example" value={false}>
                        <LinkTab style={{ paddingTop: 0, paddingBottom: 16 }} label="Dashboard" href="/" />
                        <LinkTab style={{ paddingTop: 0, paddingBottom: 16 }} label="Project" href="/" />
                        <LinkTab style={{ paddingTop: 0, paddingBottom: 16 }} label="Verify" href="/" />
                        <LinkTab style={{ paddingTop: 0, paddingBottom: 16 }} label="Contact" href="/" />
                    </Tabs>
                </div>
            </div>
            <div>
                <Button id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <img src={IconUserName} alt="" />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

function LinkTab(props: any) {
    return (
        <Tab
            component="a"
            onClick={(event: { preventDefault: () => void; }) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default HeaderHomePage
