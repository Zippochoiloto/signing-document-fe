import Header from "../components/Header";
import Style from "./StylesPages.module.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, {useState} from "react";
import {Alert, Button, Snackbar, TextField} from "@mui/material";
import FileUpload from "react-material-file-upload";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";
import { uploadFile } from "../api/AxiosService";


function CreateProject() {
    const [files, setFiles] = useState<File[]>([]);
    const [open, setOpen] = useState(false)
    const navigation = useNavigate()

    const navigateToHome = () => {
        navigation('/home')
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const startUploadFile = async () => {
        let formData = new FormData()
        formData.append('owner', 'hehe')
        formData.append("file", files[0], files[0].name)
        const req = await uploadFile(formData)
        console.log(req)
    }
    return (
        <div>
            <Header/>
            <div className={Style.BodyCreatePageContainer}>
                <div className={Style.NavbarContainer}>
                    <Button onClick={navigateToHome} style={{display: 'flex', marginBottom: '3em'}}>
                        <ArrowBackIosNewIcon style={{color: '#082977'}}/>
                        <span style={{color: '#082977'}}>Return to dash board</span>
                    </Button>
                    <p style={{fontWeight: 'bold', fontSize: 20, marginBottom: '1em'}}>New Project</p>
                    <div className={Style.Active}>
                        <p style={{color: '#FBFBFB', fontWeight: 'bold'}}>
                            1. Add Document(s)

                        </p>
                    </div>
                    <div className={Style.Deactive}>
                        2. Add Process
                    </div>
                    <div className={Style.Deactive}>
                        3. Confirmation
                    </div>
                </div>
                <div className={Style.RightSideContainer}>

                    <div className={Style.UploadFileContainer}>
                        <h1 style={{display: 'flex', justifyContent: 'start'}}>Create New Project</h1>
                        <p style={{fontSize: 20, marginBottom: '2em'}}>
                            Set up the name and document(s) needed for this project
                        </p>

                        <div style={{display: 'flex', justifyContent: 'start', marginBottom: '1em'}}>
                            <TextField placeholder='PROJECT NAME' style={{width: '30em'}}/>
                        </div>
                        <p style={{marginBottom: '1em'}}>
                            DOCUMENT
                        </p>
                        <p style={{marginBottom: '2em'}}>
                            Choose the document(s) to start the project with.
                        </p>
                        <div style={{marginBottom: '2em'}}>
                            <FileUpload value={files} onChange={setFiles}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Button style={{marginRight: '1em'}} onClick={navigateToHome} variant="outlined">Back</Button>
                            <Button variant="contained" onClick={startUploadFile}>Continue</Button>
                        </div>
                    </div>
                </div>

            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Footer/>
        </div>
    )
}

export default CreateProject
