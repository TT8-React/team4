import FormContainer from '../../components/FormContainer';
import Button from '../../components/button'
import Vector from '../../assets/Images/Vector.png'

export default function Index() {

   
    return (
        <div className="App" style={{ height: "100vh", display: "flex" }}>
            <FormContainer
                Header="Verified"
                sx={{ paddingBottom: "10px" }}
                 >
                    <img
              src={Vector}
              alt="line chart"
              style={{ maxWidth: "50%", maxHeight: "50%" }}
            />
                <Button  text={"NEXT"} />

            </FormContainer>
        </div >
    );
}
