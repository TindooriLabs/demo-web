import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import FlipBook from "../components/FlipBook/FlipBook";
import "./Home.css"


export default function Future() {
    return (
        <div className=".page-whole">
            {/* this is the limitation and solution page
            <br />
                <img src="lead.svg" alt="arrow" />
            <br /> */}

            <div>
                <FlipBook/>
            </div>

            <Link to='/' >
                <Button text="play again!" />
            </Link>
        </div>
    );
}