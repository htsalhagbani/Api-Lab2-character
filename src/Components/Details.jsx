import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

const Details = () => {
  const [item, setItem] = useState("");
  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
      .then(response => {
        setItem(response.data); 
      })
 
  }, [id]);


  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
      <Link
        to="/"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-[lightgray] transition duration-200 ease-in-out mb-4 inline-block"
        >
        Back Home
        </Link>
        <h1 className="text-3xl font-bold mb-4 text-center text-[darkblue]">{item.name}</h1>
        <img src={item.image} alt={item.name} className="w-full h-60  rounded-lg mb-4" />
        
        <div className="space-y-2">
          <p className="text-lg font-bold text-[darkblue]">Hair Color:<span className="text-black">{item.hair}</span></p>
          <p className="text-lg font-bold text-[darkblue]">Status:<span className="text-black">{item.status}</span></p>
          <p className="text-lg font-bold text-[darkblue]">Species:<span className="text-black">{item.species}</span></p>
          <p className="text-lg font-bold text-[darkblue]">Gender:<span className="text-black">{item.gender}</span></p>
          <p className="text-lg font-bold text-[darkblue]">Origin:<span className="text-black">{item.origin}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Details;
