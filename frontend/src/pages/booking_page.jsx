
import BookingLayout from "../layouts/booking_layout"
import { useState } from "react";
import { useLocation,useParams } from "react-router-dom";
import { BookingProvider } from "../contexts/booking_context";
import movies from "../data/movie.js";
import showtimes from "../data/showtime.js"

const BookingPage = () => {

  const location = useLocation();

  const { id } = useParams()

  const showtime = showtimes.find(s => s.id ===  Number(id) );

  
  const movie = movies.find(m => m.id === showtime.movieId);

  

  return (
     <BookingProvider
      initialData={{
        movie: movie,
        hall: showtime.hall,
        date: showtime.date,
        selectedTime: showtime.times[0],
        price: showtime.price
      }}
    >
      <BookingLayout times={showtime.times} />
    </BookingProvider>
  );
};

export default BookingPage;