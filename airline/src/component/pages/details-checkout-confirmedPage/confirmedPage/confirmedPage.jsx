import "./styling/checkmark.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from "html2canvas";
import ReactDOMServer from "react-dom/server";
import { Document } from "./TicketPDF/Document";
import { useContext } from "react";
import { Context } from "../../../sharedComponents/contextProvider";

export const ConfirmedPage = () => {
  const [user, setUser] = useContext(Context).user;
  const [tickets, setTickets] = useContext(Context).tickets;
  const [totalPrice, setPrice] = useContext(Context).totalPrice;
  const generatePDF = async () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text(`Client Name: ${user.fullName}`, 10, 10);
    doc.text(`ClientID: ${user.userID}`, 10, 20);
    doc.text(`Purchase Total: ${totalPrice}`, 10, 30);

    const ticketTableData = tickets.map((ticket) => [
      ticket.flightNumber,
      ticket.ticketID,
      ticket.seatNumber,
      ticket.ticketClass,
      ticket.boardingTime,
      ticket.arrivalTime,
    ]);

    doc.text("Ticket Information:", 10, 50);

    autoTable(doc, {
      head: [
        [
          "Flight Number",
          "Ticket ID",
          "Seat Number",
          "Ticket Class",
          "Boarding Time",
          "Arrival Time",
        ],
      ],
      body: ticketTableData,
      startY: 60,
    });

    doc.save("Client_Ticket_Info.pdf");
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="mb-20 w-[90rem] flex flex-col bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-[40rem]">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <div className="w-[50rem] flex flex-col justify-center items-center">
          <p className="text-[1.5rem] font-semibold mt-8 text-center">
            Congratulations! Your payment has been confirmed and completed. You
            can download your ticket folder by pressing the button below.
          </p>
          <button
            onClick={generatePDF}
            className="bg-gradient-to-r from-red-300 to-purple-100 text-white px-4 py-2 rounded mt-5"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
