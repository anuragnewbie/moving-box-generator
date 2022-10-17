import { useState, useEffect } from "react";
import "../styles/custom_style.css";

const Box = (props) => {
    const [ boxList, setBoxList ] = useState([
        {
            id: 1,
            selected: false
        }
    ]);

    function incrementId(){
        return boxList[(boxList.length-1)].id+1;
    }

    function addEvent(event){
        let keyPressedValue = event.keyCode;

        switch(keyPressedValue){
            case 119:
                // move top when key 'W' 
                break;
            case 97:
                // move left when key 'A'
                break;
            case 115:
                // move down when key 'S'
                break;
            case 100:
                // move right when key 'D'
                break;
            case 43:
                // add box when key '+'
                setBoxList(
                    [...boxList, {
                        id: incrementId(),
                        selected: false
                    }]
                )
                break;
            default: alert("Please press 'W', 'S', 'A', 'D' to move boxes and '+' key to add box.")
        }
    }

    useEffect(() => {
        if(props.gameValue){
            setBoxList([{
                id: 1,
                selected: false
            }]);
            window.addEventListener("keypress", (event)=>addEvent(event));
        }else{
            window.removeEventListener("keypress", () => console.log("ended"));
        }
        return () => window.removeEventListener("keypress", () => console.log("ended"));
    }, [props.gameValue]);

    return (
        <>
            {props.gameValue && <div className="container mt-3">
                <div className="row">
                    { boxList.map((box, index) => (
                        <div 
                            className="col-2 box" 
                            key={ index } 
                        >
                            <span className="text-dark">{ box.id }</span>
                        </div>
                    ))}
                </div>
            </div>}
        </>
    )
}

export default Box;