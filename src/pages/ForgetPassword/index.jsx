
import { Alert, } from '@mui/material';
import { useState } from 'react';
import { object, string, } from 'yup';
import FormContainer from '../../components/FormContainer';

import Input from '../../components/Input'
import Button from '../../components/button'
import LoadScreen from './LoadScreen'
import { Box } from '@mui/system';
import axios from 'axios';




const msgTypes = {
    warning: "warning",
    success: "success"
}
const initMsg = { type: '', text: '' }


export default function Index() {

    const [load, setLoad] = useState(false)
    const [message, setMsg] = useState('')
    const [inputs, setInputs] = useState([
        { id: "email", label: "Email Id",type:"email", value: "", placeholder: "Enter Email" },
    ])

    const loadChangeStatus = () => {
        setLoad(prev => !prev)
    }

    const formSchema = object({
        email: string().required().email(),
    })

    async function loginSubmit(data) {
        return (axios({
            url: 'https://react-tt-api.onrender.com/api/users/login',
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
            email: inputs[0].value,
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
                    console.log(response);
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("name", response.name);
                    localStorage.setItem("admin", response.isAdmin ? "true" : "false");
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
                Header="FORGOT PASSWORD"
                sx={{ paddingBottom: "10px" }}
                onChange={changeInputValue} >

                {AlertMessage}
                {InputsGroup}

                <Button onClick={handleSignUp} text={"SUBMIT"} />

            </FormContainer>
        </div >
    );
}
