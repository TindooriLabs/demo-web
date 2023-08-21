import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import "./Home.css"
import { motion } from "framer-motion";

const bounceTransition = {
    y: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse'
    }
};

const Home = () => {

    return (
        <div className='page-whole'>
            <div class="content">

                <motion.img class="App-logo" src="tindoori-logo.svg"
                    alt="applogo"
                    transition={bounceTransition}
                    animate={
                        {
                            y: ['10%', '-200%']
                        }
                    } />
                <br />
                <Link to='/figma' >
                    <Button text='Tindoori Demo' />
                </Link>
            </div>

        </div>
    );
}

export default Home;