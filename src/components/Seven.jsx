import { useEffect, useState } from "react";


const Seven = () => {

    const [time, setTime] = useState(60)

    useEffect(()=>{
        const timer = setTimeout(()=>setTime(time-1), 1000)
        return ()=> clearTimeout(timer)
    },[time])

    return (
        //Build a timer that counts down from a specified time.
        <div>
            <h4>Time left {time} second</h4>
        </div>
    );
};

export default Seven;