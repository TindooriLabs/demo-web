import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./Home.css"

export default function Home() {
    return (
        <div className='page-whole'>
            <h1 className='header'>This is the home page</h1>
            <Link to='/figma' >
                <Button />
            </Link>
        </div>
    );
}