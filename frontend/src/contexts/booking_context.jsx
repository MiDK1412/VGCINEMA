import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children, initialData }) => {

  const [selectedTime, setSelectedTime] = useState(initialData?.selectedTime);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const movie = initialData?.movie;
  const hall = initialData?.hall;
  const times = initialData?.times;
  const date = initialData?.date;
  const price = initialData?.price;

  const total = selectedSeats.length * price;

  const value = {
    movie,
    hall,
    times,
    date,
    selectedTime,
    setSelectedTime,
    selectedSeats,
    setSelectedSeats,
    price,
    total
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);