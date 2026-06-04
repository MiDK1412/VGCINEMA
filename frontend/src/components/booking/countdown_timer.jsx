import { useEffect, useState } from "react";
import { useBooking } from "../../contexts/booking_context"


const CountdownTimer = () => {
     const { booking, resetBooking } = useBooking();
     const [timeLeft, setTimeLeft] = useState(0);

     useEffect(() => {
        const interval = setInterval(() => {

            if (!booking.expiredAt) return;

            const remaining = Math.max(0, Math.floor((booking.expiredAt - Date.now()) / 1000));

            setTimeLeft(remaining);

            if(remaining <= 0) {
                
                resetBooking();
                localStorage.removeItem("booking");

            }
        }, 1000);

        return () => clearInterval(interval);

     },[booking.expiredAt]);
     
     const minutes = Math.floor(timeLeft / 60);
     const seconds = timeLeft % 60;

     return(
        <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
            <div className="flex flex-col justify-between items-center">
                <span className="text-red-600 font-semibold text-2xl">
                    { String(minutes).padStart(2,"0") }:
                    { String(seconds).padStart(2,"0") }
                </span>
            </div>
        </div>
        
     );

};

export default CountdownTimer;