import React, {useEffect, useState} from "react";
import { BootstrapNormalButton, BootstrapPrimaryButton } from "../components/Button";
import HeaderHomePage from "../components/HeaderHomePage";
import Style from "./StylesPages.module.css"
import IconWaving from "../icon/IconWaving.png"
import { CardList } from "./constant";
import Card, { CardProp } from "../components/Card";
import AssignedToMeCard from "../components/AssignedToMeCard";
import RecentCard from "../components/RecentCard";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";
import {getAllDocuments} from "../api/AxiosService";
import {DocumentPayload} from "./interface";


function Home() {
    const navigation = useNavigate()
    const [doc, setDoc] = useState([])
    useEffect( () => {
        (async function () {
            const res = await getAllDocuments()
            if (res.status !== 200) {
                navigation('../login')
                return
            }
            setDoc(res.data)
        })()
    }, [])
    const navigateToCreateProject = () => {
        navigation('../create-project')
    }
    const cards = CardList.map((item: CardProp, i) => {
        let count = 0
        switch (item.Title) {
            case 'ALL DOCUMENTS':
                count = doc.length
                break
            case 'PENDING':
                count = doc.filter((s: DocumentPayload) => s.Status === 'Pending').length
                break
            case 'COMPLETED':
                count = doc.filter((s: DocumentPayload) => s.Status === 'completed').length
                break
            default:
                count = 0
        }
        return (
            <div style={{ display: 'flex', width: '23%' }} key={i}>
                <Card Title={item.Title} Number={count} Icon={item.Icon} BackgroundColor={item.BackgroundColor} />
            </div>
        )
    })

    return (
        <div>
            <HeaderHomePage />
            <div className={Style.BodyHomepageContainer}>
                <div className={Style.TopContainer}>
                    <div className={Style.LeftTopContainer}>
                        <p style={{ fontWeight: 'bold', fontSize: 42 }}>
                            Hi, Ernie
                        </p>
                        <p style={{ fontSize: 20, marginBottom: '1.5em' }}>
                            Let's begin a new document, shall we?
                        </p>
                        <div style={{ display: 'flex' }}>
                            <BootstrapPrimaryButton variant="contained" onClick={navigateToCreateProject} disableRipple style={{ marginRight: 10 }}>
                                Create A Document
                            </BootstrapPrimaryButton>
                            <BootstrapNormalButton>
                                <span color="0D41BF">
                                    Use Template
                                </span>
                            </BootstrapNormalButton>
                        </div>

                    </div>
                    <div className={Style.RightTopContainer}>
                        <img alt="" src={IconWaving} style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '2em'}}>
                    {cards}
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <AssignedToMeCard payload={doc}/>
                    <RecentCard payload={doc}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
