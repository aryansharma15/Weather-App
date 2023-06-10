import React, { useEffect, useState } from 'react'


function Effprac() {
    
    const[type, setType] = useState("Zeus");
    const[items, setItems] = useState([]);
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [type]);

  return (
    <div>
        <button onClick={() => setType("posts")}>Zeus</button>
        <button onClick={() => setType("users")}>Poseidon</button>
        <button onClick={() => setType("comments")}>Hades</button>

        <h1>{type}</h1>

        <div>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    </div>
  )
}

export default Effprac