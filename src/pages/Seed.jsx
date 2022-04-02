// fetch('http://localhost:8000/api/holidays/seed')
//   .then(response => response.json())
//   .then(data => console.log(data));

import { useEffect, useState } from "react";
const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3001" 

function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND}/api/holidays/seed`)
      .then((response) => response.json())
      .then((data) => {
          setSeed(data)
          console.log(data)});
  }, []);

  return (
    <>
      <h1>Seed</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;
