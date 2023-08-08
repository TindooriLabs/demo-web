import { Link } from "react-router-dom";
import Figma from "./Figma";
export default function Home() {
    return (
        <>
            <h1>this is the homefr page</h1>
            <Link to='/figma' > <button>DEMO GO!</button></ Link>

        </>
    );
}