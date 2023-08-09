import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./Home.css"
import { motion } from "framer-motion";

const bounceTransition = {
    y: {
        duration: 1,
        ease: "easeOut",
        repeat: Infinity,

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
                    <Button />
                </Link>
            </div>

        </div>
    );
}

export default Home;