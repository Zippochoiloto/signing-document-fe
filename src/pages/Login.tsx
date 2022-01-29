import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./StylesPages.module.css"
import Header from "../components/Header";
import Frame from "../icon/Frame1.png"
import Dot from "../icon/dot.png"
import { Button, TextField } from "@mui/material";
import axios from "axios";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChangeEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value)
    }
    const handleChanePass = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value)
    }
    const sendRequestLogin = async() => {
        const req = await axios.post('http://localhost:3001/auth/login', {
            username: email,
            password,
        })
        if (req.status === 201) {
            const accessToken = req.data.access_token
            localStorage.setItem('access_token', accessToken)
            navigate('/home')
            return
        }
        
    }
    return (
        <div style={{ height: 'calc(100vh - 5em)' }}>
            <Header></Header>
            <div className={Style.pageLayout}>
                <div className={Style.loginContainer}>
                    <div className={Style.frameContainer}>
                        <img src={Frame} alt="" style={{ height: '100%' }} />
                    </div>
                    <p style={{ fontWeight: 700, fontSize: 32 }}>Login to your Dedoco Account</p>
                    <p style={{ fontWeight: 400, fontSize: 20, marginBottom: '2em' }}>Please login to your account before signing this document</p>
                    <div>
                        <TextField
                            style={{ width: '25em', height: '5em' }}
                            id="outlined-name"
                            label="EMAIL ADDRESS"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div>
                        <TextField
                            style={{ width: '25em', height: '5em' }}
                            id="outlined-name"
                            label="PASSWORD"
                            value={password}
                            type='password'
                            onChange={handleChanePass}

                        />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
                        <div style={{ width: '25em', display: 'flex', justifyContent: 'end' }}>
                            <a href="/">Forgot Password</a>
                        </div>
                    </div>
                    <Button
                        style={{ width: '29em', height: '4em', marginBottom: '1em' }}
                        variant="contained"
                        onClick={sendRequestLogin}>
                        Login
                    </Button>
                    <div style={{ marginBottom: '1em'}}>
                        <span style={{ marginRight: '2px' }}>
                            Do not have an account?
                        </span>
                        <a href="/">Create one</a>
                    </div>
                    <div>
                        <a style={{marginRight: '1em'}} href="/">Term & Conditions</a>
                        <img style={{marginRight: '1em'}} src={Dot} alt=""/>
                        <a href="/">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login