import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import FlipBook from "../components/FlipBook/FlipBook";
import "./Future.css"


export default function Future() {
    return (
        <div className="page-whole">

            <div className="flipbook">
                <FlipBook/>
            </div>

            <Link to='/' >
                <Button text="play again!" />
            </Link>
        </div>
    );
}