
import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function Future() {
    return (
        <>
            this is the limitation and solution page

            <br />
                <img src="lead.svg" alt="arrow" />
            <br />

            <Link to='/' >
                <Button text="play again!" />
            </Link>
        </>
    );
}