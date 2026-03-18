import { useEffect } from "react";
import { useBooking } from "../contexts/booking_context";

import Navbar from "../components/navbar";
import SeatSelector from "../components/seat_selector";
import BookingSummary from "../components/booking_summary";
import BookingSteps from "../components/booking_steps";
import ShowtimeSwitcher from "../components/showtime_switcher"

const BookingLayout = ({ movie, hall, date, selectedTime, times, price }) => {

  const { booking, setBookingInfo } = useBooking();
  console.log(booking);
  
  useEffect(() => {
    setBookingInfo({
      movie,
      hall,
      date,
      time: selectedTime,
      price,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-black">

      <Navbar />

      <div className="max-w-7xl mx-auto px-10 py-10">

        <BookingSteps currentStep={2} />

        <ShowtimeSwitcher times={times} />

        <div className="grid grid-cols-3 gap-6 mt-6">

          <div className="col-span-2 bg-white rounded p-6">
            <SeatSelector />
          </div>

          <BookingSummary />

        </div>

      </div>

    </div>
  );
};
export default BookingLayout;