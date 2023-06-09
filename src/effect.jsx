import React, { useEffect, useState } from 'react'


function Effect() {

  const [type, setType] = useState("post")

  useEffect(() => {
    console.log("Render");
  });

  return (
    <div>
      <button onClick={setType("Zeus")}>Zeus</button>
      <button onClick={setType("Poseidon")}>Poseidon</button>
      <button onClick={setType("Hades")}>Hades</button>

      <h1>{type}</h1>
    </div>
  )
}

export default Effect