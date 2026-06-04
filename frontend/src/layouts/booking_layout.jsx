import { useEffect, useRef } from "react";
import { useBooking } from "../contexts/booking_context";

import SeatSelector from "../components/booking/seat_selector";
import BookingSummary from "../components/booking/booking_summary";
import BookingSteps from "../components/booking/booking_steps";
import ShowtimeSwitcher from "../components/booking/showtime_switcher"
import CountdownTimer from "../components/booking/countdown_timer";

const BookingLayout = ({ movie, hall, date, selectedTime, times, price }) => {

  const { booking, setBookingInfo } = useBooking();
  console.log(booking);

  useEffect(() => {

      //Nếu đổi phim hoặc đổi thời gian
      const isDifferentMovie = 
        booking.movie?.id !== movie.id;
      const isDifferentShowTime = 
        booking.time !== selectedTime || booking.date !== date;

      setBookingInfo((prev) => ({

        ...prev,

        movie,
        hall,
        date,
        time: selectedTime,
        price,

        //chỉ reset ghế khi đổi suất chiếu
        seats:
            isDifferentShowTime || isDifferentMovie
              ? []
              : prev.seats,
        // đổi suất => reset timer
        expiredAt:
            isDifferentMovie || isDifferentShowTime
              ? null
              : prev.expiredAt,
      
    }));
  }, [movie, hall, date, selectedTime, price]);

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-10 py-10">

        <BookingSteps currentStep={2} />

        <ShowtimeSwitcher times={times} />

        <div className="grid grid-cols-3 gap-6 mt-6">

          <div className="col-span-2 bg-white rounded p-6">
            <SeatSelector />
          </div>
          <div className="space-y-4 sticky top-5">
            <CountdownTimer/>
            <BookingSummary />
          </div>
          

        </div>

      </div>

    </div>
  );
};
export default BookingLayout;