import vipIcon from "./VipIcon.png";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../../../sharedComponents/contextProvider";
export const PdfTicketCard = (props) => {
  
  const [trip, setTrip] = useContext(Context).trip;
  const [ticketType, setTicket] = useContext(Context).ticketType;
  const headerColor = ticketType == "Vip" ? "text-amber-400" : "text-black";
  const cardColor =
    ticketType == "Vip"
      ? "divide-x-2 text-white flex  bg-black  ml-5 w-[55rem] border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      : "bg-white text-black divide-x-2 flex  ml-5 w-[55rem] border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700";

  return (
    <>
      <div className={cardColor}>
        <div className="w-[50rem] flex flex-col">
          <h1 className="text-[2rem]">
            <span className={headerColor}>
              {ticketType == "Vip" ? "VIP" : "Economy"}
            </span>{" "}
            Ticket
          </h1>
          <div className="flex  items-center mt-3">
            <img
              src={trip.airlineimage}
              alt=""
              className="w-[4rem] h-[4rem] ml-4 rounded-full"
            />
            <h1 className="text-[1.5rem] ml-3 ">{trip.airlinename}</h1>
          </div>
          <h1 className="text-[1.3rem] font-bold mt-4 ">
            Journey:
            <span className="text-[1.2rem] font-normal ml-2">
              {trip.from} - {trip.destination}
            </span>
          </h1>
          <h1 className="text-[1.3rem] font-bold mt-4 ">
            Trip Duration:
            <span className="text-[1.2rem] font-normal ml-2 ">
              {trip.departureTime} - {trip.arrivalTime}
            </span>
          </h1>

          <h1 className="text-[1.3rem] font-bold mt-4 ">
            Gate:
            <span className="text-[1.2rem] font-normal ml-2">{trip.gate}</span>
          </h1>
        </div>
      </div>
    </>
  );
};
