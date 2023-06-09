import React, { useEffect, useState } from 'react'


function Effect() {

  const [type, setType] = useState("post")

  useEffect(() => {
    console.log("Render");
  });

  return (
    <div>Effect</div>
  )
}

export default Effect