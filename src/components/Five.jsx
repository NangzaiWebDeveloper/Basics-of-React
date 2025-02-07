import { useState } from "react";

const Five = () => {

    const [toggle, setToggle] = useState(false)

    // const changeToggle =()=>{
    //     return setToggle(!toggle)
    // }

    return (
        //Implement a basic toggle switch component.
        <div>
            <input type="checkbox" onChange={()=>setToggle(!toggle)}/>
            <p>{toggle ? "ON" : "OFF"}</p>
        </div>
    );
};

export default Five;