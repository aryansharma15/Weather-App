import React, { useEffect, useState } from 'react'


function Effprac() {
    
    const[type, setType] = useState("Zeus");

    console.log("render");

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => console.log(json))
    });

  return (
    <div>
        <button onClick={() => setType("posts")}>Zeus</button>
        <button onClick={() => setType("users")}>Poseidon</button>
        <button onClick={() => setType("comments")}>Hades</button>

        <h1>{type}</h1>
    </div>
  )
}

export default Effprac