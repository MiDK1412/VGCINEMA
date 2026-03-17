import { useBooking } from "../contexts/booking_context";

const BookingSummary = () => {

  const { movie, hall, date, selectedTime, selectedSeats, total } = useBooking();
  const get_day_name = (date) => new Date(date).toLocaleDateString("vi-VN", { weekday: "long" });
  const get_date = new Date(date).toLocaleDateString("vi-VN");

  return (
    <div className="bg-white p-6 rounded-lg ">

      <img
        src= {movie.poster}
        className="rounded mb-4 h-90 w-80"
      />

      <h2 className="text-lg font-semibold">
        {movie.title}
      </h2>

      <p className=" font-semibold"> {hall}</p>
      <p className="text-sm text-gray-500 mb-4">
        Suất: {selectedTime} - {get_day_name(date)}, {get_date}
      </p>

      {
        selectedSeats.length > 0 && (
          <>
            <hr className="my-6 border-t-2 border-dashed border-gray-300" />
            <div className="flex justify-between">
              <span> {selectedSeats.length}x Ghế đơn </span>
              <span> {total.toLocaleString()} đ </span>
            </div>
            <p className="text-sm text-gray-600">
              Ghế: {selectedSeats.join(", ")}
            </p>
          </>
        )
      }
    
      <hr className="my-6 border-t-2 border-dashed border-gray-300" />

      <div className="flex justify-between font-semibold mt-4">
        <span>Tổng cộng</span>
        <span className="text-red-600">
          {total.toLocaleString()} đ
        </span>
      </div>

      <div className="flex justify-between mt-6">

        <button className="text-red-600">
          Quay lại
        </button>

        <button className="bg-red-600 text-white px-6 py-2 rounded">
          Tiếp tục
        </button>

      </div>

    </div>
  );
};

export default BookingSummary;