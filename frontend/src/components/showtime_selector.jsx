import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const ShowTimeSeletor = ({showtimes}) => {

    const dates = useMemo(() => [...new Set(showtimes.map((s) => s.date))], [showtimes]);

    const [selectedDate, setSelectedDate] = useState(dates[0] || null);

    const filtered_showtimes = useMemo(() => showtimes.filter(
      (s) => s.date === selectedDate),
      [showtimes, selectedDate]);

    const get_day_name = (date) => new Date(date).toLocaleDateString("vi-VN", { weekday: "long" });

    const navigate = useNavigate();

    const handleBooking = (show, time) => {
      navigate(`/booking/${show.id}`);
    };

  return (
    <div className="mt-10">

      <h2 className="font-semibold text-lg border-l-4 border-red-600 pl-3 mb-5">
        Lịch Chiếu
      </h2>

      <div className="flex gap-3 mb-5">

        {
          dates.map(date =>(
            <button 
            key ={date} 
            onClick={() => setSelectedDate(date)}
            className= {` px-4 py-2 rounded 
              ${
                selectedDate === date
                ? "bg-red-600 text-white"
                : "hover:bg-red-600 hover:text-white"
              }`

            }>

              {get_day_name(date)}

              <div className="text-xs">
                {new Date(date).toLocaleDateString("vi-VN")}
            </div>
            </button>
          ))
        }

      </div>

      {
        filtered_showtimes.map(show => (
        <div key={show.id} className="mb-6">

          <h4 className="font-semibold mb-2">{show.hall}</h4>

          <div className="flex gap-3 flex-wrap">
            {show.times.map((time, index) => (
              <button
                key={index}
                onClick={() =>handleBooking(show, time)}
                className="border border-gray-300 px-8 py-2 rounded hover:bg-red-600 hover:text-white"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
    ))}

    </div>
  );
};

export default ShowTimeSeletor;