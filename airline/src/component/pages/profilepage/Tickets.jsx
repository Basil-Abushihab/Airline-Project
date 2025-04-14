import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from "./Layout";

function Profile() {
  const userId = sessionStorage.getItem('userId');
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (userId) {
      // Replace with your Firebase Realtime Database URL
      const firebaseUrl = `https://airline-tickets-46241-default-rtdb.firebaseio.com/Users/${userId}.json`;
     console.log( userDetails.ticket );

      axios.get(firebaseUrl)
        .then(res => {
          setUserDetails(res.data);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [userId]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const update = async () => {
    if (!userId) return;
    const url = `https://airline-tickets-46241-default-rtdb.firebaseio.com/Users/${userId}.json`;

    try {
      const response = await axios.patch(url, userDetails);
      console.log('User updated successfully:', response.data);
      alert("User updated successfully");
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };




  return (
    <>
  <Layout />

  {userDetails.tickets && userDetails.tickets.map((ticket, index) => (

  <div class="mt-8 m-24 "  key={index}>
            <div class="lg:w-1/2 w-full">
            </div>
            <div class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
          
                {/* <img src="https://i.ibb.co/0n6DSS3/bgimg.png" class="absolute w-full -ml-12 mt-24" alt="background circle images" /> */}
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
                    <div class="md:flex items-center justify-between">
                        <h5 class="text-2xl font-semibold leading-6 text-gray-800"> BoardingTime: {ticket.boardingTime || ''} ArrivalTime: {ticket.arrivalTime || ''} </h5>
                        <p class="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800"> 🗺️⁀જ✈︎</p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600"> <b> Ticket Class :{ticket.ticketClass || ''} SeatNumber:{ticket.seatNumber|| ''} BoardingTime: {ticket.boardingTime || ''} FlightNumber: { ticket.flightNum || ''} TicketID :  { ticket.ticketID || ''}</b></p>
                </div>
     
                
            </div>
         </div>))} 


{/* 

           {userDetails.tickets && userDetails.tickets.map((ticket, index) => (

  <div class="mt-8 m-24 "  key={index}>
            <div class="lg:w-1/2 w-full">
            </div>
            <div class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
          
                <div role="listitem" class="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">FlightNum: { ticket.flightNum || ''}
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800">{ticket.description || ''} {ticket.departureTime|| ''} {ticket.arrivalTime || ''} </h2>
                        <p class="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800"> 🗺️⁀જ✈︎</p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600"> FROM:<b>{ticket.from || ''}</b>To:<b>{ticket.destination || ''}</b></p>
                </div>
     
                
            </div>
         </div>))} 
       */}
      
{/* <div>


{userDetails.tickets && userDetails.tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.id || ''}</td>
                <td>{ticket.distination || ''}</td>
                <td>{ticket.time || ''}</td>
                <td>{ticket.time || ''}</td>
              </tr>
            ))}
</div> */}
    </>
  );
}

export default Profile;
