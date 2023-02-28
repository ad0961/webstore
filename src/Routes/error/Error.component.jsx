import {Errorcomp, Heading, Message} from "./Error.style";
import Button from "../../components/Button/Button.component";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <Errorcomp>
            <Heading>Payment unsuccessfull</Heading>
            <Message>If any money has been debited from your account, it will be returned within 48 hours.</Message>
            <Button onClick ={() => navigate('/checkout')}>Retry</Button>
        </Errorcomp>
    )
}

export default Error;