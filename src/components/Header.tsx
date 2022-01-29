import React from "react";
import Style from "./StylesComponents.module.css"
import DedocoIcon from "../icon/dedoco.png"
import HelpCircle from "../icon/help-circle.png"

function Login() {
    return (
        <div className={Style.headerContainer}>
            <div>
                <img alt="" src={DedocoIcon} />
            </div>
            <div className={Style.rightContainer}>
                <img alt="" src={HelpCircle} style={{marginRight: 5}}/>
                <span style={{color: '#082977', fontSize: 20}}>Help</span>
            </div>
        </div>
    )
}

export default Login