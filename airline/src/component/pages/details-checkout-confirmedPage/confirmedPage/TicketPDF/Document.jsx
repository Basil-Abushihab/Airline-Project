import { Context } from "../../../../sharedComponents/contextProvider";
import { useContext } from "react";
import { PdfTicketCard } from "./ticketPDF";
export const Document = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between divide-x-2 w-[100rem]">
          <h1 className="text-[2rem]">
            Client Name: <span></span>
          </h1>
          <h1 className="text-[2rem]">
            Client ID: <span></span>
          </h1>
          <h1 className="text-[2rem]">
            Payment: <span></span>
          </h1>
        </div>
        <div className="flex flex-col justify-evenly"></div>
      </div>
    </>
  );
};
