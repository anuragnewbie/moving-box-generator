import Box from "./Box";
import "../styles/custom_style.css";
import { useState } from "react";

const Header = () => {
    const [ gameValue, setGameValue ] = useState(false);

    const toggle = () => {
        setGameValue(!gameValue);
    }

    function dynamicButton(){
        let obj = {
            className : "btn btn-success me-2",
            text: "START"
        }

        if(gameValue){
            obj.className="btn btn-danger me-2";
            obj.text="STOP";
        }

        return obj;
    }

    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white">Movable Box Generator</span>
                    <div className="d-flex">
                        <button className={dynamicButton().className} onClick={ toggle }>
                            {dynamicButton().text}
                        </button>
                    </div>            
                </div>
            </nav>

            { <Box gameValue={ gameValue } /> }
        </>
    )
}

export default Header;