import { createContext, useContext, useEffect, useState } from "react";

const BookingContext = createContext();

const initialBooking = {
  movie: null,
  hall: null,
  date: null,
  time: null,
  seats: [],
  price: 0,
  expiredAt: null,
};

export const BookingProvider = ({ children }) => {

  // load localStorage khi app mở
  const [booking, setBooking] = useState(() => {

    const saved = localStorage.getItem("booking");

    if(!saved) return initialBooking;

    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error(error);
      return initialBooking;
    }
  });

  useEffect(() => {

    localStorage.setItem(
      "booking",
      JSON.stringify(booking)
    );
  }, [booking])
  

  const setBookingInfo = (data) => {
    setBooking((prev) => { 

      const newData = 
        typeof data === "function"
          ? data(prev)
          : data;
      return {
        ...prev,
        ...newData 
      }
    });
  };

  const resetBooking = () => {
    setBooking(initialBooking);
    localStorage.removeItem("booking");
  };

  /*const startHold = () => {
    const expire = Date.now() + 6 * 60 * 1000; // 6 phút
    setHoldExpireTime(expire);

    // lưu vào localStorage để reload không mất
    localStorage.setItem("holdExpireTime", expire);
  };*/

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