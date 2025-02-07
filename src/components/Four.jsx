
const Four = () => {

    const names = ["Nangzai", "Sushil", "Baron", "Joy"]
    
    return (
        // Build a list component to display a list of items.
       <div>
            <ul>
                {
                    names.map((items, index)=>{
                        return (<li key={index}>{items}</li>)
                    })
                }
            </ul>
       </div>
    );
};

export default Four;