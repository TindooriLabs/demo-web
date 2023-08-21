import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function Mission() {
    return (
        <>
            <div id="mission-container">

                <img src="mission.png" alt="mission path" />
                <div id="mission_text">
                    Local Asian to non-Asian connections via language learning. There are over 1 M international
                    students from Asia that study in the US each year. While a majority of Americans embrace
                    multicultural relationships, many Asian Americans still feel their culture isn’t readily accepted.
                    Tindoori is a dynamic digital space: users start as individual language learners, find a match in
                    our API to non-API matchpool, and evolve to learn languages together in chat.
                    Love found in translation (18+).
                </div>


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