import React from "react";
import Style from "./StylesComponents.module.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface CardProp {
    Title: string,
    Number: number,
    Icon: any,
    BackgroundColor: string
}
function Card(prop: CardProp) {
    
    return (
        <div className={Style.cardContainer} style={{ backgroundColor: prop.BackgroundColor }}>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent:'center', marginRight: '1em'}}>
                <img src={prop.Icon} alt="" />
            </div>
            <div>
                <div style={{display: 'flex', marginTop: '1em', marginBottom: '1em'}}>

                    <p style={{fontWeight: 600, fontSize: 16}}>
                        {prop.Title}
                    </p>
                    <ArrowForwardIosIcon/>
                </div>
                
                <p>
                    {prop.Number} Documents(s)
                </p>
            </div>
        </div>
    )
}

export default Card