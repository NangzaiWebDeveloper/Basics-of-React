import { useState } from "react";

const Eight = () => {

    const [backgroundColor, setBackgroundColor] = useState('yellow')

    const handleClick =()=>{
        const newColor = backgroundColor === "yellow" ? "lightblue" : "green"
        setBackgroundColor(newColor)
    }

    return (
        <div onClick={handleClick}
        style={{backgroundColor,
            width: "200px",
            height: "200px",
            cursor: "pointer"
        }}
        >
            Click to change color
        </div>
    );
};

export default Eight;