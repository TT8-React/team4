import FormContainer from '../../components/FormContainer';
import Button from '../../components/button'
import Vector from '../../assets/Images/Vector.png'
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const nav = useNavigate()


    return (
        <div className="App" style={{ height: "100vh", display: "flex" }}>
            <FormContainer
                Header="Verified"
                sx={{ paddingBottom: "10px" }}
            >
                <img
                    src={Vector}
                    alt="line chart"
                    style={{ width: "100%", height: "100%" }}
                />
                <Button text={"NEXT"} onClick={_ => nav("/")} />

            </FormContainer>
        </div >
    );
}
