import { useState } from "react";

const Two = () => {

    const [count, setCount] = useState(0)

    // on details trick
    const increment =()=>{
        return setCount(count+1)
    }

    return (
        <div>
            {/* Build a counter application with increment & decrement buttons. */}

            <button onClick={increment}>+</button>
            <span>{count}</span>
            {/* on shortcut trick  */}
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    );
};

export default Two;