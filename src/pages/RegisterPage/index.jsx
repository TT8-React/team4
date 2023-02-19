
import { Alert, } from '@mui/material';
import { useState } from 'react';
import { object, string, } from 'yup';
import FormContainer from '../../components/FormContainer';

import Input from '../../components/Input'
import PageLink from '../../components/PageLink'
import Button from '../../components/button'
import LoadScreen from './LoadScreen'
import { Box } from '@mui/system';


const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const msgTypes = {
    warning: "warning",
    success: "success"
}
const initMsg = { type: '', text: '' }


export default function Index() {

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
        return fetch('https://react-tt-api.onrender.com/api/users/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).catch(err => (err))
            .then(response => response.json())
            .then(json => json)

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
                (response?.message) ? setMsg({ type: msgTypes.warning, text: response.message })
                    : setMsg({ type: msgTypes.success, text: "Success" })
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

                <PageLink title={"Already have an account ?"} navLink={"Login"} />
            </FormContainer>
        </div >
    );
}
