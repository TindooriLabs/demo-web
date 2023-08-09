import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./Home.css"


const Home = () => {
    return (
        <div className='page-whole'>
            <div class="content">
                <img class="App-logo" src="tindoori-logo.svg" alt="applogo" />
                <br />
                <Link to='/figma' >
                    <Button />
                </Link>
            </div>

        </div>
    );
}

export default Home;