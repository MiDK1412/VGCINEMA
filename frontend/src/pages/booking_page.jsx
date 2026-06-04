import { useEffect } from "react";
import { useBooking } from "../contexts/booking_context";
import { useLocation,useParams } from "react-router-dom";

import movies from "../data/movie.js";
import showtimes from "../data/showtime.js"

import BookingLayout from "../layouts/booking_layout"

const BookingPage = () => {
  const location = useLocation();
  const { id } = useParams()
  const { setBookingInfo } = useBooking();


  const showtime = showtimes.find(s => s.id ===  Number(id) );
  const movie = movies.find(m => m.id === showtime.movieId);

  console.log(movie);

  const selectedTime = location.state?.selectedTime || showtime.times[0];

  return (
      <BookingLayout 
        movie = {movie}
        hall = {showtime.hall}
        date = {showtime.date}
        selectedTime = {selectedTime}
        times = {showtime.times} 
        price = {showtime.price}
      />

  );
};

export default BookingPage;