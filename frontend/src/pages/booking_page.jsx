import Navbar from "../components/navbar";
import SeatSelector from "../components/seat_selector";
import BookingSummary from "../components/booking_summary";
import BookingSteps from "../components/booking_steps";
import { useState } from "react";

const BookingPage = () => {

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Navbar />

      <div className="px-10 py-10">

        <BookingSteps currentStep={step} />

        <div className="grid grid-cols-3">

          {/* LEFT */}
          <BookingSummary selectedSeats={selectedSeats} />

          {/* RIGHT */}
          <div className="col-span-2">
            <SeatSelector
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingPage;