import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then(response => {
        setItems(response.data);
      })
     
  }, []);

  return (
   
    <div className="mx-auto p-6 bg-blue-100 shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold text-center  mb-6 text-[darkblue]">Character Images</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((element,index) => (
        <Link 
          key={index} 
          to={`/Details/${element.id}`} 
          className="transition-transform transform hover:scale-105"
        >
          <img 
            src={element.image} 
            alt='image'
            className="w-full h-auto max-h-60 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
          />
        </Link>
      ))}
    </div>
  </div>
  
  
  
  );
};

export default Home;
