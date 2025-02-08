import { useState } from "react";
import { useEffect } from "react";


const Six = () => {

    const [items, setItems] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => setItems(data)
        .catch(error => console.error(error))
        )
    }, [])

    return (
        <div>
            {
                items ? (
                    <div>
                        <h5>{items.body}</h5>
                    </div>
                ) : (
                    <div>
                        <h4>Loading......</h4>
                    </div>
                )
            }
        </div>
    );
};

export default Six;