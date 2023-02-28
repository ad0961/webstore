import {SuccessComp, Heading} from "./success.style";
import Button from "../../components/Button/Button.component";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
    return (
        <SuccessComp>
            <Heading>Payment successfull</Heading>
            <Button onClick ={() => navigate('/shop')}>Continue shopping</Button>
        </SuccessComp>
    )
}

export default Success;