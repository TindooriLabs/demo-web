import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import FlipBook from "../components/FlipBook/FlipBook";


export default function Future() {
    return (
        <>
            this is the limitation and solution page

            <br />
                <img src="lead.svg" alt="arrow" />
            <br />

            <FlipBook/>


            <Link to='/' >
                <Button text="play again!" />
            </Link>
        </>
    );
}