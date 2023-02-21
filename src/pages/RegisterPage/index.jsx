
import { Alert, } from '@mui/material';
import { useState } from 'react';
import { object, string, } from 'yup';
import FormContainer from '../../components/FormContainer';

import Input from '../../components/Input'
import PageLink from '../../components/PageLink'
import Button from '../../components/button'
import LoadScreen from './LoadScreen'
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const msgTypes = {
    warning: "warning",
    success: "success"
}
const initMsg = { type: '', text: '' }


export default function Index() {

    const nav = useNavigate()

    const [load, setLoad] = useState(false)
    const [message, setMsg] = useState('')
    const [inputs, setInputs] = useState([
        { id: "name", label: "Name", value: "", placeholder: "Enter Name" },
        { id: "email", label: "Email Id", value: "", placeholder: "Enter Email" },
        { id: "password", label: "Password", value: "", placeholder: "Enter Password" },
    ])

    const loadChangeStatus = () => {
        setLoad(prev => !prev)
    }

    const formSchema = object({
        password: string().required().matches(passwordRegex,
            "Password should contain letter ,number and special character"),
        email: string().required().email(),
        name: string().required().min(3).max(15),
    })

    async function loginSubmit(data) {
        return (axios({
            url: 'https://react-tt-api.onrender.com/api/users/signup',
            method: "POST",
            data: data,
        })
            .then(({ data }) => data))
            .catch(({ response: { data } }) => data);
    }


    const changeInputValue = ({ target: { id, value } }) => {
        setMsg(initMsg)
        setInputs(prev => prev.map(inp => inp.id === id ? ({ ...inp, value }) : { ...inp }))
    }


    const handleSignUp = () => {
        setMsg(initMsg)
        loadChangeStatus()

        formSchema.validate({
            name: inputs[0].value,
            email: inputs[1].value,
            password: inputs[2].value,
        }).catch(err => {
            setMsg({ type: msgTypes.warning, text: err.message })
        }).then(async (value) => {
            if (value) {
                let response = await loginSubmit(value);
                if (response?.message) {
                    setMsg({ type: msgTypes.warning, text: response.message })
                }
                else if (response?.token) {
                    setMsg({ type: msgTypes.success, text: "Success" })
                    nav("/login")
                } else {
                    setMsg({ type: msgTypes.warning, text: "Something went wrong" })
                }
            }
        }).finally(_ => loadChangeStatus())

    }

    const AlertMessage = message?.text && <Alert
        onClick={_ => setMsg(initMsg)}
        sx={{ fontSize: "14px", }}
        variant='filled' severity={message.type}
        children={message.text} />

    const InputsGroup =
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 3 }}>
            {inputs.map(input => <Input onChange={changeInputValue} {...input} key={input.label} />)}
        </Box>

    return (
        <div className="App" style={{ height: "100vh", display: "flex" }}>
            <LoadScreen load={load} loadChangeStatus={loadChangeStatus} />
            <FormContainer
                Header="SIGN UP"
                sx={{ paddingBottom: "10px" }}
                onChange={changeInputValue} >

                {AlertMessage}
                {InputsGroup}

                <Button onClick={handleSignUp} text={"Sign Up"} />

                <PageLink title={"Already have an account ?"} avRoute={"/"} navLink={"Login"} />
            </FormContainer>
        </div >
    );
}
