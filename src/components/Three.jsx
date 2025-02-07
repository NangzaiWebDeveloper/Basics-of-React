import { useState } from "react";


const Three = () => {

   const [user, setUser] = useState('')

//    const showUser =(event)=>{
//     return setUser(event.target.value)
//    }

    return (
        // ### Create a form that takes user input and displays it in real-time. 
       <div>
            <input type="text" onChange={(event)=>setUser(event.target.value)} />
            <p>Show User: {user}</p>
       </div>
    );
};

export default Three;