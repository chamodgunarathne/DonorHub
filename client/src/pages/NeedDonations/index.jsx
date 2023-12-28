import React, { useState, useEffect } from 'react';
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Card from './Card';

const Index = () => {

  const [category, setCategory] = useState([]);

  const handleDonation = () => {
    if (sessionStorage.uEmail) {
      window.location.href = '/need-add-donation';
    } else {
      window.alert("You need to log in for add donation request");
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/api/need/viewNeed"
      );
      const json = await res.json();
      setCategory(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <br />

      <div className='flex justify-end m-8'>
        <Button
          as={NavLink}
          onClick={handleDonation}
          className={twMerge(
            "  !bg-green-800   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
          )}
        >
          <span
            className={twMerge(
              "!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
            )}
          >
            Need donation
          </span>
        </Button>
      </div>
      <div className='flex justify-center'>
        <hr className='w-full m-4 mt-0' />
      </div>
      <h2 className="m-6 text-gray-900 font-semibold text-2xl">Donations</h2><br/>
    
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 m-6'>
        {category.map((option, index) => (
          <div key={index}>
            <Card
              title={option.item}
              description={option.description}
              image={option.image}
              quantity={option.quantity}
              email={option.email}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
