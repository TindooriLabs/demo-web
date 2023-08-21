import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function Mission() {
    return (
        <>
            <div id="mission-container">

                <br />
                <Link to='/future' >
                    <Button text="what is next?" />
                </Link>
                <br />
                <Link to='/' >
                    <Button text="play again!" />
                </Link>
            </div>



        </>
    );
}