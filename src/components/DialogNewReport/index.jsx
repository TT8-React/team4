import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TitleInput from '@mui/material/Input';
import Button from '../button'
import Input from '../Input'
import { Alert, IconButton } from '@mui/material';
import { object, string } from 'yup';



function checkDates(to, from) {
    const to_Date = new Date((to).replaceAll("/", " "))
    const from_Date = new Date((from).replaceAll("/", " "))

    console.log((to_Date.getMonth() + 1 <= from_Date.getMonth() + 1));

    if (to_Date.getFullYear() === from_Date.getFullYear()) {

        if (to_Date.getMonth() + 1 === from_Date.getMonth() + 1) {

            if (to_Date.getDate() === from_Date.getDate()) {

                return (true);

            } else if (to_Date.getDate() < from_Date.getDate()) { return (false); }

        } else if (to_Date.getMonth() + 1 < from_Date.getMonth() + 1) { return (false); }

    } else if (to_Date.getFullYear() < from_Date.getFullYear()) { return (false); }

    return (true);
}




export default function Index(props) {

    const initValue = { from: "", to: "" }
    const dateRegex = /^([12]\d{3}(\/|-)(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12]\d|3[01]))/

    const [isVaild, setIsVaild] = React.useState(false);
    const [dataInput, setDataInput] = React.useState(initValue);
    const [title, setTitle] = React.useState("Customize report");

    const dataSchema = object({
        from: string()
            .required()
            .matches(dateRegex),
        to: string()
            .required()
            .matches(dateRegex)
            .test("late", "Should Be after from date", val => checkDates(val, dataInput.from)),
    });

    const onChangeData = ({ target: { value, id } }) => {
        const change = (id === "from") ? { from: value } : { to: value }
        setDataInput(prev => ({ ...prev, ...change }))
    }

    const handleDone = () => {
        dataSchema.isValid(dataInput, { abortEarly: false, })
            .then(value => {
                setIsVaild(!value);
                if (value) {
                    props.handleClose();
                    setDataInput(initValue);
                    props?.onDone({ title: title || "Customize report", date: dataInput })
                }
            })
    };

    const DialogTitleStylr = { fontWeight: 600, border: "1px solid black", borderWidth: "0px 0px 1px 0px", display: "flex", alignItems: "center", justifyContent: "space-between" }
    const DialogContentStyle = { height: "100px", width: "95%", padding: "10px 8px", display: "flex", alignItems: "center", justifyContent: "space-around" }
    const DialogActionContainerStyle = { display: "flex", alignItems: "center", justifyContent: "space-around" }

    return (
        <div>
            {props.Button}
            <Dialog
                PaperProps={{
                    style: {
                        userSelect: "none",
                        width: "100%",
                        borderRadius: 10
                    }
                }}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">


                <DialogTitle
                    sx={DialogTitleStylr}
                    id="alert-dialog-title" >

                    <TitleInput
                        value={title}
                        onChange={({ target: { value } }) => setTitle(value)}
                        placeholder="new report title"
                    />

                    <IconButton onClick={props.handleClose} sx={{ background: "red", ":hover": { background: "pink" } }} />
                </DialogTitle>
                {isVaild &&
                    <Alert
                        onClose={() => { setIsVaild(false) }}
                        severity="warning"
                        children={"Both of inputs requiered as Date!"} />
                }

                <DialogContent sx={DialogContentStyle}>
                    <Input id="from" label={"from"} value={dataInput.from} onChange={onChangeData} />
                    <Input id="to" label={"to"} value={dataInput.to} onChange={onChangeData} />
                </DialogContent>

                <DialogActions sx={DialogActionContainerStyle}>
                    <Button onClick={handleDone} text={"Continue for next step"} />
                </DialogActions>
            </Dialog>
        </div>
    );
}