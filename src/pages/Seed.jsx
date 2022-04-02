// fetch('http://localhost:8000/api/holidays/seed')
//   .then(response => response.json())
//   .then(data => console.log(data));

import { useEffect, useState } from "react";
import urlcat from 'urlcat';
const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:3001" 

function Seed() {
    const [seed, setSeed] = useState([]);
  
    useEffect(() => {
      fetch(urlcat(BACKEND))
        .then((response) => response.json())
        .then((data) => setSeed(data));
    }, []);
  

// function Seed() {
//   const [seed, setSeed] = useState([]);

//   useEffect(() => {
//     fetch(`${BACKEND}`)
//       .then((response) => response.json())
//       .then((data) => {
//           setSeed(data)});
//   }, []);

  return (
    <>
      <h1>Seed2</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;
