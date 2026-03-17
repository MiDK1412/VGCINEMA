import { useBooking } from "../contexts/booking_context";

const ShowtimeSwitcher = ({ times }) => {

  const { selectedTime, setSelectedTime } = useBooking();

  return (
    <div className="bg-white rounded-lg p-4 mt-6 flex items-center gap-4">

      <span className="text-gray-600">Đổi suất chiếu</span>

      {times.map(time => (
        <button
          key={time}
          onClick={() => setSelectedTime(time)}
          className={`px-4 py-2 rounded border
          ${
            selectedTime === time
              ? "bg-red-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {time}
        </button>
      ))}

    </div>
  );
};

export default ShowtimeSwitcher;