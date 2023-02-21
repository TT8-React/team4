import FormContainer from '../../components/FormContainer';
import PageLink from '../../components/PageLink'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom';


export default function Index() {
    const nav = useNavigate()


    return (
        <div className="App" style={{ height: "100vh", display: "flex" }}>
            <FormContainer
                Header="Verification"
                sx={{ paddingBottom: "10px" }}
            >
                <PageLink title={"You are sing up with this account please verify by this link "} navLink={"www.loremipsum.com"} />
                <Button text={"SUBMIT"} onClick={_ => nav("/verified")} />

            </FormContainer>
        </div >
    );
}