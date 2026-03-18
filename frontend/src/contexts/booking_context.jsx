import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

const initialBooking = {
  movie: null,
  hall: null,
  date: null,
  time: null,
  seats: [],
  price: 0
};

export const BookingProvider = ({ children }) => {

  const [booking, setBooking] = useState(initialBooking);

  const setBookingInfo = (data) => {
    setBooking(prev => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setBooking(initialBooking);
  };

  const total = booking.seats.length * booking.price;

  return (
    <BookingContext.Provider 
      value={{
        booking,
        setBookingInfo,
        resetBooking,
        total
      }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);