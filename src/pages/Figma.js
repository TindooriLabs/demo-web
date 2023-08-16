import Button from "../components/Button";
import transition from "../transition";
import { Link } from "react-router-dom";

const Figma = () => {
    return (
        <>
            <div id="figma" style={{ backgroundColor: '#0F0F0F' }} >
                <iframe
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIb3TD5hDmFXZaU3GmGdw2c%2FTindoori-Labs---Copy%3Ftype%3Ddesign%26node-id%3D2106-32299%26t%3DGGCSu0FeIDEdbOHE-1%26scaling%3Dmin-zoom%26page-id%3D2041%253A25670%26starting-point-node-id%3D2106%253A32299%26show-proto-sidebar%3D1%26mode%3Ddesign"
                    allowFullScreen
                ></iframe>
                <br />
                <img src="lead.svg" alt="arrow" />
                <br />
                <Link to="/mission" >
                    <Button text="Our Mission" />
                </Link>
                <br />
                <br />


            </div>
        </>
    );

}

export default transition(Figma);